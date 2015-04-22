var Utils = require('./utils');
var utils = new Utils();

var rootDir = 'P:\\zlast2weeks\\gtui\\tableau\\';

function createCustomerCsv(){
	var customers = require('./customers');
	var custCsvStr = utils.convertObjectsToCSV(customers);
	var custmoresCsvFilePath = rootDir + 'customers.csv';
	utils.saveCSVStringToFile(custmoresCsvFilePath, custCsvStr);
}

function createProductsCsv(){
	var products = require('./products');
	var prodCsvStr = utils.convertObjectsToCSV(products);
	var productsCsvFilePath = rootDir + 'products.csv';
	utils.saveCSVStringToFile(productsCsvFilePath, prodCsvStr);	
	console.log('*** Total products =  ' + products.length);
}

function createRegionsCsv(){
	var regions = require('./regions');
	var regionCsvStr = utils.convertObjectsToCSV(regions);
	var regionsCsvFilePath = rootDir + 'regions.csv';
	utils.saveCSVStringToFile(regionsCsvFilePath, regionCsvStr);	
	console.log('*** Total regions =  ' + regions.length);
}


//createCustomerCsv();
//createProductsCsv();

createRegionsCsv();