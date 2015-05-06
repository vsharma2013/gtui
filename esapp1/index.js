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

ESApp.prototype.executeQuery = function(){
	var query = {};
	//query = this.getBasicQuery();
	//this.client.search(query).then(this.onQueryResponse.bind(this), this.onQueryError.bind(this));
	this.executeAjaxCreateIndex();
}

ESApp.prototype.onQueryResponse = function(resp){
	console.log(resp);
}

ESApp.prototype.onQueryError = function(err){
	console.trace(err.message);
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

ESApp.prototype.getFilteredQuery = function(){
	return { //doesn't works
		index: 'companysales',
		type: 'sales',
		body: {
			query: {
				filtered: {
					query :{
						match_all: {
							//category: 'Clothing'
						}
					},
					filter : {
						"brand" : ['Wrangler']
					}

				}		
			},
			size:25,
			_source : false,
			fields : ['product.brand', 'customer.name']
		}
	}
}

ESApp.prototype.executeAjax = function(){
	var req = {
	    query : {
	        filtered: {
				query :{
					match: {
						category: 'Clothing'
					}
				},
				filter : {
					// bool : {
					// 	should : {
					// 		term : {"brand" : 'Wrangler'}
					// 	}
					// }
				}
			}
	    }
	};
	var options = {
		url : 'http://localhost:9200/companysales/sales/_search?',
		type : 'POST',
		data : JSON.stringify(req),
		contentType : 'application/json',
		success : function(data){
			console.log(data);
		},
		error : function(a,b,c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	}
	$.ajax(options);	
}

ESApp.prototype.executeAjaxCreateIndex = function(){
	var options = {
		url : 'http://localhost:9200/companysales',
		type : 'PUT',
		success : function(data) { console.log(data);},
		error : function(a,b,c) { console.log('error in creating index')}
	}; 
	$.ajax(options);
}