var customers = require('./customers');
var regions = require('./regions');
var utils = require('./utils')
var addresses = [];

var customersCount = customers.length;
var regionsCount = regions.length;

var usedRegions = [];
var id = 1;

customers.forEach(function(c){
	if(regions.length === 0){
		regions = usedRegions;
		usedRegions = [];
	}

	var r = regions.pop();
	usedRegions.push(r);

	addresses.push({
		id: id,
		customerId : c.id,
		line1 : "Flat No Z 603",
		line2 : "Skyline Apprtments, Andheri",
		regionId : r.id
	});
	id++;
}) ;
module.exports = addresses;