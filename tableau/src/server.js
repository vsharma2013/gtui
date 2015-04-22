var utils = require('./utils');
var customers = require('./customers');
var products = require('./products');
var regions = require('./regions');
var addresses = require('./address');
var times = require('./times');


customers = utils.shuffleArray(customers);
products = utils.shuffleArray(products);
regions = utils.shuffleArray(regions);
times = utils.shuffleArray(times);

var rootDir = 'P:\\zlast2weeks\\gtui\\tableau\\';

var FILE_NAME = {
	CUSTOMER_CSV : rootDir + 'customers.csv',
	PRODUCTS_CSV : rootDir + 'products.csv',
	REGIONS_CSV : rootDir + 'regions.csv',
	ADDRESS_CSV : rootDir + 'address.csv',
	TIMES_CSV : rootDir + 'times.csv'
}



function createCustomerCsv(){
	var custCsvStr = utils.convertObjectsToCSV(customers);
	utils.saveCSVStringToFile(FILE_NAME.CUSTOMER_CSV, custCsvStr);
}

function createProductsCsv(){
	var prodCsvStr = utils.convertObjectsToCSV(products);
	utils.saveCSVStringToFile(FILE_NAME.PRODUCTS_CSV, prodCsvStr);	
	console.log('*** Total products =  ' + products.length);
}

function createRegionsCsv(){
	var regionCsvStr = utils.convertObjectsToCSV(regions);
	utils.saveCSVStringToFile(FILE_NAME.REGIONS_CSV, regionCsvStr);	
	console.log('*** Total regions =  ' + regions.length);
}

function createAdressCsv(){
	var addForCustNReg = addresses.getAddressesForCustomersAndRegions(customers, regions);
	var addressCsvStr = utils.convertObjectsToCSV(addForCustNReg);
	utils.saveCSVStringToFile(FILE_NAME.ADDRESS_CSV, addressCsvStr);	
	console.log('*** Total addresses =  ' + addForCustNReg.length);
}

function createTimesCsv(){
	var timeCsvStr = utils.convertObjectsToCSV(times);
	utils.saveCSVStringToFile(FILE_NAME.TIMES_CSV, timeCsvStr);
	console.log('*** Total times = ', times.length);
}



createCustomerCsv();
createProductsCsv();
createRegionsCsv();
createAdressCsv();
createTimesCsv();