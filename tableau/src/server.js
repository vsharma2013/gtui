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
var addForCustNReg = addresses.getAddressesForCustomersAndRegions(customers, regions);
addForCustNReg = utils.shuffleArray(addForCustNReg);


function createCsvFiles(customers, products, regions, addForCustNReg, times){
	var csv = require('./csv');
	csv.createCsvFiles(customers, products, regions, addForCustNReg, times);
}

createCsvFiles(customers, products, regions, addForCustNReg, times);