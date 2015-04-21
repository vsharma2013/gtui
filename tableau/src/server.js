var csv = require('csv');
var customers = require('./customers');
var Utils = require('./utils');
var utils = new Utils();
var fs = require('fs');

var custCsv = utils.convertObjectsToCSV(customers);
var custmoresCsv = 'P:\\zlast2weeks\\gtui\\tableau\\customers.csv';
fs.writeFile(custmoresCsv, custCsv, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 