var utils = require('./utils');


var rootDir = 'P:\\zlast2weeks\\gtui\\tableau\\';

function createCustomerCsv(){
	var customers = require('./customers');
	customers = utils.shuffleArray(customers);
	var custCsvStr = utils.convertObjectsToCSV(customers);
	var custmoresCsvFilePath = rootDir + 'customers.csv';
	utils.saveCSVStringToFile(custmoresCsvFilePath, custCsvStr);
}

function createProductsCsv(){
	var products = require('./products');
	products = utils.shuffleArray(products);
	var prodCsvStr = utils.convertObjectsToCSV(products);
	var productsCsvFilePath = rootDir + 'products.csv';
	utils.saveCSVStringToFile(productsCsvFilePath, prodCsvStr);	
	console.log('*** Total products =  ' + products.length);
}

function createRegionsCsv(){
	var regions = require('./regions');
	regions = utils.shuffleArray(regions);
	var regionCsvStr = utils.convertObjectsToCSV(regions);
	var regionsCsvFilePath = rootDir + 'regions.csv';
	utils.saveCSVStringToFile(regionsCsvFilePath, regionCsvStr);	
	console.log('*** Total regions =  ' + regions.length);
}

function createAdressCsv(){
	var addresses = require('./address');
	var addressCsvStr = utils.convertObjectsToCSV(addresses);
	var addressCsvFilePath = rootDir + 'address.csv';
	utils.saveCSVStringToFile(addressCsvFilePath, addressCsvStr);	
	console.log('*** Total addresses =  ' + addresses.length);
}


createCustomerCsv();
createProductsCsv();
createRegionsCsv();
//createAdressCsv();