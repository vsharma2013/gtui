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
	this.initUI();
	$('#search').on('click', this.executeQuery.bind(this));
}

ESApp.prototype.initUI = function(){
	$('#results').text('');
	$('.resultsTable tbody').html('')

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
	this.showResultsTable(resp);
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

ESApp.prototype.executeQuery = function(){
	this.initUI();
	var uiInput = this.getInputValues();
	var searchAndFilters = this.getSearchAndFilterFromInput(uiInput);
	if(!searchAndFilters.isInputOK){
		console.error('error in parsing the inputs');
		return;
	}

	var esQuery = this.getESQueryFromSearchAndFilters(searchAndFilters);
	console.log(esQuery);

	this.client.search(esQuery).then(this.onQueryResponse.bind(this), this.onQueryError.bind(this));
	
}

ESApp.prototype.getInputValues = function(){
	return {
		category : $('#category').val(),
		type : $('#type').val(),
		brand : $('#brand').val(),
		model : $('#model').val(),
		region : $('#region').val(),
		state : $('#state').val(),
		city : $('#city').val(),
		name : $('#customer').val()
	};
}

ESApp.prototype.getSearchAndFilterFromInput = function(uiInput){
	var self = this;
	var result = {
		query:{
			name:'', 
			value : ''
		}, 
		filters: [], 
		isInputOK : false, 
		hasFilters : false
	};
	var bFirst = true;

	var keys = Object.keys(uiInput);
	keys.forEach(function(k){
		var val = uiInput[k];
		if(!self.isEmptyString(val)){
			if(bFirst){
				result.query.name = k;
				result.query.value = uiInput[k];
				bFirst = false;
			}
			else{
				result.filters.push({name : k, value : val});
			}
		}
	});

	result.isInputOK = !self.isEmptyString(result.query.value);
	result.hasFilters = result.isInputOK && result.filters.length > 0;
	return result;
}

ESApp.prototype.isEmptyString = function(str){
	if(!str) return true;
	if(str.length === 0) return true;
	return (/^\s*$/).test(str);
}

ESApp.prototype.getESQueryFromSearchAndFilters = function(searchAndFilters){
	var esQuery = {
		index : 'companysales',
		type: 'sales',
		body: {
			query:{
			}
		}
	};

	if(!searchAndFilters.hasFilters){
		esQuery.body.query.match = {};
		esQuery.body.query.match[searchAndFilters.query.name] = searchAndFilters.query.value;
	}
	else{
		esQuery.body.query.filtered = {
			query : {
				match : {}
			},
			filter:{}
		};

		esQuery.body.query.filtered.query.match[searchAndFilters.query.name] = searchAndFilters.query.value;

		if(searchAndFilters.filters.length === 1){
			esQuery.body.query.filtered.filter.term = {};
			esQuery.body.query.filtered.filter.term[searchAndFilters.filters[0].name] = searchAndFilters.filters[0].value;
		}
		else{
			esQuery.body.query.filtered.filter.and = [];
			var filters = searchAndFilters.filters;
			filters.forEach(function(f){
				var term = {term: {}};
				term.term[f.name] = f.value;
				esQuery.body.query.filtered.filter.and.push(term);
			});
		}
	}
	return esQuery;
}

ESApp.prototype.showResultsTable = function(resp){
	var total = resp.hits.total;
	var hits = resp.hits.hits;
	var count = hits.length;
	var time = resp.took;
	$('#results').text('Showing ' + count +' of ' + total + ' results in ' + time + ' milliseconds');

	var rowHtml = '<tr>'+
			        '<td align="center">ID_PRODUCT</td>'+
			    	'<td align="center">ID_REGION</td>'+
			    	'<td align="center">ID_CUSTOMER</td>'+
			  	  '</tr>';
	var $tbody = $('.resultsTable tbody');
	hits.forEach(function(h){
		var p = h._source.product;
		var product = p.category + '-' + p.type + '-' + p.brand + '-' + p.model;
		var r = h._source.region;
		var region = r.city + '-' + r.state + ' (' + r.region + ')';
		var customer = h._source.customer.name + '-' + h._source.customer.id;

		var row = rowHtml.replace('ID_PRODUCT', product).replace('ID_REGION', region).replace('ID_CUSTOMER', customer);
		var $trow = $(row);
		$trow.appendTo($tbody);
	});

}









