var utils = require('./utils');

function getSalesForProductsAddressesAndTimes(products, addresses, times){
	var sales = [];
	var id = 1;
	var ONE_LAKH = 100 * 1000;
	var totalSalesVolume = ONE_LAKH * 5;
	var productsClone = products.slice(0);
	var addressesClone = addresses.slice(0);
	var timesClone = times.slice(0);

	for (var i = 0; i < totalSalesVolume; i++) {
		productsClone = productsClone.length === 0 ? products.slice(0) : productsClone;
		addressesClone = addressesClone.length === 0 ? addresses.slice(0) : addressesClone;
		timesClone = timesClone.length === 0 ? times.slice(0) : timesClone;

		var customerInfo = getCustomerAndRegionFromAdress(addressesClone);
		sales.push({
			id : id,
			productId : getProductId(productsClone),
			customerId : customerInfo.customerId,
			regionId : customerInfo.regionId,
			timestamp : getTime(timesClone)
		});
		id++;
	};

	return sales;
}

function getDenormedSalesForProductsAddressesAndTimes(products, addresses, times){
	var sales = [];
	var id = 1;
	var ONE_LAKH = 100 * 1000;
	var totalSalesVolume = ONE_LAKH * 5;
	var productsClone = products.slice(0);
	var addressesClone = addresses.slice(0);
	var timesClone = times.slice(0);

	for (var i = 0; i < totalSalesVolume; i++) {
		productsClone = productsClone.length === 0 ? products.slice(0) : productsClone;
		addressesClone = addressesClone.length === 0 ? addresses.slice(0) : addressesClone;
		timesClone = timesClone.length === 0 ? times.slice(0) : timesClone;

		var address = addressesClone.pop();
		var product = productsClone.pop();
		var customer = 
		sales.push({
			id : id,
			product : product,
			customer : address.customer,
			region : address.region,
			timestamp : getTime(timesClone)
		});
		id++;
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
	var tOrg = times.pop();
	var t = JSON.parse(JSON.stringify(tOrg));

	if(t.month === 2 && t.day > 28) t.day = 28;
	if(t.month < 10) t.month = '0' + t.month;
	if(t.day < 10) t.day = '0' + t.day;
	var time = t.year + '/' + t.month + '/' + t.day;// + '   ' + t.hour + ':' + t.minute;
	return time;
}

module.exports = {
	getSalesForProductsAddressesAndTimes : getSalesForProductsAddressesAndTimes,
	getDenormedSalesForProductsAddressesAndTimes : getDenormedSalesForProductsAddressesAndTimes
}