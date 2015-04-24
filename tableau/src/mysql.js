var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'mysql',
	db       : 'test',
	database : 'test'
});

function createDataTables(customers, products, regions, addForCustNReg, times){
	connection.connect(function(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}
	});

	//createProductsTable(products, connection);
	//createCustomersTable(customers, connection);
	//createRegionsTable(regions, connection);
	//createAddressesTable(addForCustNReg, connection);
	createSalesTable(products, addForCustNReg, times, connection);
}

function createProductsTable(products, conn){
	var sql = "INSERT INTO products (id, category, type, brand, model) VALUES ?";
	var values = [];
	products.forEach(function(p){
		values.push([p.id, p.category, p.type, p.brand, p.model]);
	});
	executeQuery(conn, sql, values, 'products');
}

function createCustomersTable(customers, conn){
	var sql = "INSERT INTO customers (id, name, sex, contactNumber, email, dob) VALUES ?";
	var values = [];
	customers.forEach(function(c){
		values.push([c.id, c.name, c.sex, c.contactNumber, c.email, c.dob]);
	});
	executeQuery(conn, sql, values, 'customers');
}

function createRegionsTable(regions, conn){
	var sql = "INSERT INTO regions (id, region, state, city, pincode) VALUES ?";
	var values = [];
	regions.forEach(function(r){
		values.push([r.id, r.region, r.state, r.city, r.pincode]);
	});
	executeQuery(conn, sql, values, 'regions');
}


function executeQuery(conn, sqlQuery, values, tableName, callback){
	conn.query(sqlQuery, [values], function(err) {
	    if (err) 
	    	console.log(err);
	    else{
	    	console.log('created ' + tableName + ' table successfully');
	    	if(callback)
	    		callback();
	    }
	});	
}

function createAddressesTable(addForCustNReg, conn){
	var sql = "INSERT INTO addresses (id, customerId, regionId, line1, line2) VALUES ?";
	var values = [];
	addForCustNReg.forEach(function(a){
		values.push([a.id, a.customerId, a.regionId, a.line1, a.line2]);
	});
	executeQuery(conn, sql, values, 'addresses');	
}

function createSalesTable(products, addForCustNReg, times, conn){
	var sales = require('./sales');
	var salesForProductsNAddresses = sales.getSalesForProductsAddressesAndTimes(products, addForCustNReg, times);
	var salesCnt = salesForProductsNAddresses.length;
	//console.log(salesForProductsNAddresses);
	//console.log("total sales = " + salesCnt);
	var TWENTY_FIVE_K = 25000;
	var sales25K = [];
	
	function onInsertComplete(){
		sales25K = [];
		var remainingSales = salesForProductsNAddresses.length;
		if(remainingSales === 0 ) {
			conn.end();
			return ;
		}

		var max = remainingSales > TWENTY_FIVE_K ? TWENTY_FIVE_K : remainingSales;
		for (var i = 0; i < max; i++) {
			sales25K.push(salesForProductsNAddresses.pop());
		};
		insert25KSalesRecords(sales25K, conn, onInsertComplete);
	}

	for (var i = 0; i < TWENTY_FIVE_K; i++) {
		sales25K.push(salesForProductsNAddresses.pop());
	};
	insert25KSalesRecords(sales25K, conn, onInsertComplete);
}

function insert25KSalesRecords(sales25K, conn, cbOnInsertComplete){
	var sql = "INSERT INTO sales (id, productId, customerId, regionId, timestamp) VALUES ?";
	var values = [];
	sales25K.forEach(function(s){
		values.push([s.id, s.productId, s.customerId, s.regionId, s.timestamp]);
	});
	executeQuery(conn, sql, values, 'sales', cbOnInsertComplete);	
}

module.exports = {
	createDataTables : createDataTables
}