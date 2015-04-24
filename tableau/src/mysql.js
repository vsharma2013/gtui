var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'mysql'
});

function createDataTables(customers, products, regions, addForCustNReg, times){
	connection.connect(function(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}
	});
}




module.exports = {
	createDataTables : createDataTables
}