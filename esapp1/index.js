var client = new $.es.Client({
  hosts: 'localhost:9200'
});

var query = {};

query = getBasicQuery();

client.search(query).then(onQueryResponse, onQueryError	);

function onQueryResponse(resp){
	console.log(resp);
}

function onQueryError(err){
	console.trace(err.message);
}

function getBasicQuery(){
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