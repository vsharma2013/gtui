
var utils = require('./utils');
var sales = require('./sales');

var rootDir = '//Users//vishal//devapps//nodeapps//salesDB//gtui//tableau//';

var FILE_NAME = {
	CUSTOMER_CSV : rootDir + 'customers.csv',
	PRODUCTS_CSV : rootDir + 'products.csv',
	REGIONS_CSV : rootDir + 'regions.csv',
	ADDRESS_CSV : rootDir + 'address.csv',
	TIMES_CSV : rootDir + 'times.csv',
	SALES_CSV : rootDir + 'sales.csv'
}



function createCustomerCsv(customers){
	var custCsvStr = utils.convertObjectsToCSV(customers);
	utils.saveCSVStringToFile(FILE_NAME.CUSTOMER_CSV, custCsvStr);
}

function createProductsCsv(products){
	var prodCsvStr = utils.convertObjectsToCSV(products);
	utils.saveCSVStringToFile(FILE_NAME.PRODUCTS_CSV, prodCsvStr);	
	console.log('*** Total products =  ' + products.length);
}

function createRegionsCsv(regions){
	var regionCsvStr = utils.convertObjectsToCSV(regions);
	utils.saveCSVStringToFile(FILE_NAME.REGIONS_CSV, regionCsvStr);	
	console.log('*** Total regions =  ' + regions.length);
}

function createAdressCsv(addForCustNReg){
	var addressCsvStr = utils.convertObjectsToCSV(addForCustNReg);
	utils.saveCSVStringToFile(FILE_NAME.ADDRESS_CSV, addressCsvStr);	
	console.log('*** Total addresses =  ' + addForCustNReg.length);
}

function createTimesCsv(times){
	var timeCsvStr = utils.convertObjectsToCSV(times);
	utils.saveCSVStringToFile(FILE_NAME.TIMES_CSV, timeCsvStr);
	console.log('*** Total times = ', times.length);
}

function createSalesCsv(products, addForCustNReg, times){
	var salesForProductsNAddresses = sales.getSalesForProductsAddressesAndTimes(products, addForCustNReg, times);
	var salesCsvStr = utils.convertObjectsToCSV(salesForProductsNAddresses);
	utils.saveCSVStringToFile(FILE_NAME.SALES_CSV, salesCsvStr);
	console.log('*** Total sales = ', salesForProductsNAddresses.length);
}

function createCsvFiles(customers, products, regions, addForCustNReg, times){
	createCustomerCsv(customers);
	createProductsCsv(products);
	createRegionsCsv(regions);
	createAdressCsv(addForCustNReg);
	createTimesCsv(times);
	createSalesCsv(products, addForCustNReg, times);
}

module.exports = {
	createCsvFiles : createCsvFiles
}