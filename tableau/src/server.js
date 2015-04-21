var csv = require('csv');
var customers = require('./customers');
var Utils = require('./utils');
var utils = new Utils();


var custCsvStr = utils.convertObjectsToCSV(customers);
var custmoresCsvFilePath = 'P:\\zlast2weeks\\gtui\\tableau\\customers.csv';

utils.saveCSVStringToFile(custmoresCsvFilePath, custCsvStr);