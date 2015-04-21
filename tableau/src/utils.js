function Utils(){

}


Utils.prototype.getRandomArrayIndex = function(arr){
	return this.randomIntFromInterval(0, arr.length-1);
}

Utils.prototype.getRandomItemFromArray = function(arr){
	return arr[this.randomIntFromInterval(0,arr.length-1)];
}

Utils.prototype.randomIntFromInterval = function(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

Utils.prototype.shuffleArray = function(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

Utils.prototype.getDays = function(){
	var days = [];
	for(var i = 1 ; i <= 30 ; i++){
		days.push(i);
	}
	return days;
}

Utils.prototype.getMonths = function(){
	var months = [];
	for(var i = 1 ; i <= 12 ; i++){
		months.push(i);
	}
	return months;
}

Utils.prototype.getDOBYears = function(){
	var years = [];
	var start = 1950;
	var end = 1995;
	for (var i = start; i < end; i++) {
		years.push(i)
	};
	return years;
}

Utils.prototype.getSalesYears = function(){
	var years = [];
	var start = 2000;
	var end = 2015;
	for (var i = start; i < end; i++) {
		years.push(i)
	};
	return years;
}

Utils.prototype.convertObjectsToCSV = function(arr){
	var keys = Object.keys(arr[0]);
	var comma = '\",\"';
	var header = '\"';
	keys.forEach(function(k){
		header += k + comma;
	});
	header = header.substr(0, header.length-2);
	header += '\n';
	arr.forEach(function(val){
		var str ='\"';
		keys.forEach(function(k){
			str += val[k] + comma;
		});
		header += str.substr(0, str.length-2);
		header += '\n';
	});
	
	
	return header;
}

module.exports = Utils;