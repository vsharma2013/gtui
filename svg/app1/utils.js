function getRandomItemFromArray(arr){
	return arr[this.getRandomIntFromInterval(0,arr.length-1)];
}

function getRandomIntFromInterval(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}


function Path(){
	this.content = [];
}

Path.prototype.moveTo = function(x,y){
	this.content.push({
		moveTo : {
			x : x,
			y : y
		}
	});
}

Path.prototype.lineTo = function(x, y){
	this.content.push({
		lineTo : {
			x : x,
			y : y
		}
	});
}

Path.prototype.toString = function(){
	var path = '';
	this.content.forEach(function(p){
		if(p.moveTo){
			path += 'M ' + p.moveTo.x + ' ' + p.moveTo.y + ' ';
		}
		else if(p.lineTo){
			path += 'L ' + p.lineTo.x + ' ' + p.lineTo.y + ' ';
		}
		
	});
	path += ' Z';
	return path;
}
