var utils = require('./utils')


function getAddressesForCustomersAndRegions(customers, regions){
	var addresses = [];
	var regionsClone = regions.slice(0);
	var customersCount = customers.length;
	var regionsCount = regions.length;
	var id = 1;

	customers.forEach(function(c){
		if(regionsClone.length === 0){
			regionsClone = regions.slice(0);;
		}

		var r = regionsClone.pop();

		addresses.push({
			id: id,
			customerId : c.id,
			line1 : "Flat No Z 603",
			line2 : "Skyline Apprtments, Andheri",
			regionId : r.id
		});
		id++;
	}) ;
	
	return addresses;
}
module.exports = {
	getAddressesForCustomersAndRegions : getAddressesForCustomersAndRegions
};