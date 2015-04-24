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
	createAddressesTable(addForCustNReg, connection);
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


function executeQuery(conn, sqlQuery, values, tableName){
	conn.query(sqlQuery, [values], function(err) {
	    if (err) 
	    	console.log(err);
	    else
	    	console.log('created ' + tableName + ' table successfully');
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
module.exports = {
	createDataTables : createDataTables
}