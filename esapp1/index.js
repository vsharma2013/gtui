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
	query = this.getBasicQuery();
	this.client.search(query).then(this.onQueryResponse.bind(this), this.onQueryError.bind(this));
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
			size:25
		}
	}
}