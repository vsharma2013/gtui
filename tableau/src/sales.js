var utils = require('./utils');

function getSalesForProductsAddressesAndTimes(products, addresses, times){
	var sales = [];
	var id = 1;
	var ONE_LAKH = 100 * 1000;
	var totalSalesVolume = ONE_LAKH * 1;
	var productsClone = products.slice(0);
	var addressesClone = addresses.slice(0);
	var timesClone = times.slice(0);

	for (var i = 0; i < totalSalesVolume; i++) {
		productsClone = productsClone.length === 0 ? products.slice(0) : productsClone;
		addressesClone = addressesClone.length === 0 ? addresses.slice(0) : addressesClone;
		timesClone = timesClone.length === 0 ? times.slice(0) : timesClone;

		var customerInfo = getCustomerAndRegionFromAdress(addressesClone);
		sales.push({
			productId : getProductId(productsClone),
			customerId : customerInfo.customerId,
			regionId : customerInfo.regionId,
			timeId : getTime(timesClone)
		});
	};

	return sales;
}

function getCustomerAndRegionFromAdress(addresses){
	var a = addresses.pop();
	return {
		customerId : a.id,
		regionId : a.regionId
	};	
}

function getProductId(products){
	var p = products.pop();
	return p.id;
}

function getTime(times){
	var t = times.pop();
	var time = t.year + '/' + t.month + '/' + t.day;// + '   ' + t.hour + ':' + t.minute;
	return time;
}

module.exports = {
	getSalesForProductsAddressesAndTimes : getSalesForProductsAddressesAndTimes
}