var utils = require('./utils');


var years = utils.getSalesYears();
var months = utils.getMonths();
var days = utils.getDays();

var times = [];

years.forEach(function(y){
	times = times.concat(getTimesForYear(y));
});

function getTimesForYear(year){
	var times = [];
	months.forEach(function(m){
		times = times.concat(getTimesForYearMonth(year, m));
	});
	return times;
}

function getTimesForYearMonth(year, month){
	var times = [];
	days.forEach(function(d){
		times = times.concat(getTimesForYearMonthDay(year, month, d));
	});
	return times;
}

function getTimesForYearMonthDay(year, month, day){
	var h1 = utils.randomIntFromInterval(0, 23);
	var h2 = utils.randomIntFromInterval(0, 24);
	var h3 = utils.randomIntFromInterval(0, 24);
	var h4 = utils.randomIntFromInterval(0, 24);

	var m1 = utils.randomIntFromInterval(0, 59);
	var m2 = utils.randomIntFromInterval(0, 59);
	var m3 = utils.randomIntFromInterval(0, 59);
	var m4 = utils.randomIntFromInterval(0, 59);

	var t1 = {year : year, month : month, day : day, hour : h1, minute : m1 };
	var t2 = {year : year, month : month, day : day, hour : h2, minute : m2 };
	var t3 = {year : year, month : month, day : day, hour : h3, minute : m3 };
	var t4 = {year : year, month : month, day : day, hour : h4, minute : m4 };

	return [t1, t2, t3, t4];
}


module.exports = times;