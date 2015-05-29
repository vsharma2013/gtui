var elasticsearch = require('elasticsearch');
var request = require('request');
var sales = require('./sales');

var salesIndexName = 'companysales';
var salesTypeName = 'sales';
var id = 1;

var client = new elasticsearch.Client({
	host: 'localhost:9200',
	requestTimeout : 1000 * 60 *5
	//,log: 'trace'
});

function createESIndices(customers, products, regions, addForCustNReg, times){
	deleteIndex(salesIndexName, function(err){
		if(err){
			console.log(err);
			return;
		}
		
		createIndexAndMapping(customers, products, regions, addForCustNReg, times);
	});
}

function createIndexAndMapping(customers, products, regions, addForCustNReg, times){
	var options = {
		url : 'http://localhost:9200/companysales',
		method : 'PUT',
	}; 
	request(options, function(err, req, body){
		if(err){
			console.log('error in creating index');
			return;
		}
		var data = JSON.parse(body);
		if(data.acknowledged){
			console.log('created index successfully');
			putMapping(customers, products, regions, addForCustNReg, times);
		}
	});
}
function putMapping(customers, products, regions, addForCustNReg, times){
	var url = 'http://localhost:9200/companysales/_mapping/sales';
	var mapping = {
		sales : {
			properties : {
				product : {
					properties : {
						id : {'type': 'long'},
						category : {'type' : 'string', 'index' : 'not_analyzed', 'store' : 'true'},
						type : {'type' : 'string', 'index' : 'not_analyzed', 'store' : 'true'},
						brand : {'type' : 'string', 'index' : 'not_analyzed', 'store' : 'true'},
						model : {'type' : 'string', 'index' : 'not_analyzed', 'store' : 'true'}
					}
				},
				customer : {
					properties: {
						id : {'type': 'long'},
						sex : {'type' : 'string', 'index' : 'not_analyzed', 'store' : 'true'},
						email : {'type' : 'string', 'index' : 'not_analyzed', 'store' : 'true'},
						contactNumber : {'type' : 'long'},
						dob : {'type':'date', 'format':'yyyy/MM/dd HH:mm:ss||yyyy/MM/dd'}
					}
				},
				region : {
					properties: {
						id : {'type': 'long'},
						region : {'type' : 'string', 'index' : 'not_analyzed', 'store' : 'true'},
						state : {'type' : 'string', 'index' : 'not_analyzed', 'store' : 'true'},
						city : {'type' : 'string', 'index' : 'not_analyzed', 'store' : 'true'},
						pincode : {'type' : 'long'}						
					}
				},
				timestamp:{'type':'date','format':'yyyy/MM/dd HH:mm:ss||yyyy/MM/dd'}
			}
		}
	};

	var options = {
		url : url,
		method : 'PUT',
		json : mapping
	}; 
	request(options, function(err, req, body){
		if(err){
			console.log('error in creating mapping');
			return;
		}
		addTypesToIndex(customers, products, regions, addForCustNReg, times);
	});	
}

function addTypesToIndex(customers, products, regions, addForCustNReg, times){
	var salesDocs = sales.getDenormedSalesForProductsAddressesAndTimes(products, addForCustNReg, times);
	var sales20KDoc = [];
	var TWENTY_K = 20000;

	function onComplete(){
		if(salesDocs.length === 0) return;

		sales20KDoc = [];
		var max = salesDocs.length > TWENTY_K ? TWENTY_K : salesDocs.length; 
		for (var i = 0; i < max; i++) {
	 		sales20KDoc.push(salesDocs.pop());
		};
		add20KSalesDoc(sales20KDoc, onComplete);
	}

	for (var i = 0; i < TWENTY_K; i++) {
	 	sales20KDoc.push(salesDocs.pop());
	};

	add20KSalesDoc(sales20KDoc, onComplete);
}

function add20KSalesDoc(sales20KDoc, cbOnComplete){
	var bulkQuery = {body : []};
	sales20KDoc.forEach(function(sDoc){
		bulkQuery.body.push({
			index: {
				_index : salesIndexName,
				_type : salesTypeName,
				_id : id
			}
		});

		bulkQuery.body.push(sDoc);
		++id;

	});

	client.bulk(bulkQuery, function (err, resp) {
		if(err){
			console.log(err);
			return;
		}
		console.log("added sales types successfully");
		cbOnComplete();
	});
}
function checkClustureStatus(){
	client.ping({
	  // ping usually has a 3000ms timeout 
	  requestTimeout: Infinity,

	  // undocumented params are appended to the query string 
	  hello: "elasticsearch!"
	}, function (error) {
		if (error) {
			console.trace('elasticsearch cluster is down!');
		} else {
			console.log('All is well');
		}
	});
}

function deleteIndex(indexName, cbOnDelete){
	var options = {
		index: indexName,
  		ignore: [404]
	};

	function deleteSuccess(){
		console.log("deleted indices successfully : " + indexName);
		cbOnDelete(null);
	}

	function deleteError(err){
		cbOnDelete(err);
	}

	client.indices.delete(options).then(deleteSuccess, deleteError);
}
module.exports = {
	createESIndices : createESIndices
}