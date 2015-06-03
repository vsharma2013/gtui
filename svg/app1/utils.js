var blackStroke = "fill: none; stroke: black; stroke-width : 0";
var blackStrokeLine = "stroke: black;";
var fillBar = 'rgba(68,169,168,1)';

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

function getFrames(count, width, height, offset){
	var x1 = W/6;
	var y1 = H - height - 30*5;
	var sin60 = Math.sin(Math.PI/3);
	var cos60 = Math.cos(Math.PI/6);
	var frames = [];

	for(var i = 0 ; i < count ; i++){
		frames.push({
			x : x1 + i * offset * sin60,
			y : y1 - (i * offset * cos60),
			height : height,
			width : width
		});
	}
	return frames;
}

function getRandomPathForFrame(xStart, yStart, fWidth, fHeight){
	var path = new Path();
	var x = xStart;
	var y = yStart;
	var xMax = fWidth;
	var yMax = fHeight;
	var xIntervals = [10, 20, 30];

	path.moveTo(x, y);
	while(x <= xMax){
		y = getRandomIntFromInterval(y, yMax);
		path.lineTo(x, y);
		x += getRandomItemFromArray(xIntervals);

		path.lineTo(x, y);
		y=yStart;
		path.lineTo(x,y);
	}
	return path;
}

function refreshView(){
	$("body").html($("body").html());
}
