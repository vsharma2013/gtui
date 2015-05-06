$(document).ready(onAppReady);

function onAppReady(){
	var esApp = new ESApp();
}

function ESApp(){
	this.init();
};

ESApp.prototype.init = function(){
	this.client = new $.es.Client({
	  hosts: 'localhost:9200'
	});

	this.executeQuery();
}

ESApp.prototype.executeAjaxCreateIndex = function(){
	var self = this;
	var options = {
		url : 'http://localhost:9200/companysales',
		type : 'PUT',
		success : function(data) { 
			console.log(data);
			if(data.acknowledged){
				self.putMapping();
			}
		},
		error : function(a,b,c) { console.log('error in creating index')}
	}; 
	$.ajax(options);
}

ESApp.prototype.putMapping = function(){
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
		type : 'PUT',
		data : JSON.stringify(mapping),
		success : function(data) { console.log(data);},
		error : function(a,b,c) { console.log('error in puuting mapping')}
	}; 
	$.ajax(options);
}

ESApp.prototype.onQueryResponse = function(resp){
	console.log(resp);
}

ESApp.prototype.onQueryError = function(err){
	console.trace(err.message);
}

ESApp.prototype.executeQuery = function(){
	var query = {};
	query = this.getAndFilteredQuery();
	this.client.search(query).then(this.onQueryResponse.bind(this), this.onQueryError.bind(this));
	//this.executeAjaxCreateIndex();
	//this.putMapping();
}

ESApp.prototype.getBasicQuery = function(){
	return {
		index: 'companysales',
		type: 'sales',
		body: {
			query: {
				match: {
					category: 'Automobile'
				}
			},
			//fields : ['city'],
			size:25
		}
	}
}

ESApp.prototype.getBasicFilteredQuery = function(){
	return {
		index: 'companysales',
		type: 'sales',
		body: {
			query: {
				filtered: {
					query :{
						match: {
							category: 'Automobile'
						}
					},
					filter : {
						term : {'brand' : 'BMW'}
					}

				}		
			},
			size:25,
			_source : true
		}
	}
}

ESApp.prototype.getAndFilteredQuery = function(){
	return {
		index: 'companysales',
		type: 'sales',
		body: {
			query: {
				filtered: {
					query :{
						match: {
							category: 'Automobile'
						}
					},
					filter : {
						and : [
							{term : {'brand' : 'BMW'}},
							{term : {'region': 'South'}},
							{term : {'city' : 'Guntur'}}
						]
						
					}

				}		
			},
			size:25,
			_source : true
		}
	}

}