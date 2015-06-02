
var H = window.innerHeight;
var W = window.innerWidth;

var c = {
	x : H/2,
	y : W/2
};

var blackStroke = "fill: none; stroke: black; stroke-width : 0";
var blackStrokeLine = "stroke: black;";
var fillBar = 'rgba(68,169,168,1)';

function onLoad(){
	var $svg = $('<svg>').attr({
		'xmlns' : 'http://www.w3.org/2000/svg',
		'version' : '1.1',
		'id' : 'rootSvg',
		'height' : H + 'px',
		'width' : W + 'px',
		'viewBox' : '0 0 ' + W + ' ' + H,
	});

	//addCircle($svg);
	var $g = $('<g id="frameGroup"></g>');
	$g.appendTo($svg);
	$svg.appendTo($('body'));
	refreshView();

	var frames = getFrames();
	addBarCharts(frames);
	refreshView();
}

function refreshView(){
	$("body").html($("body").html());
}

function addCircle($svg){
	var $g = $('<g>');
	var $circle = $('<circle></circle>');
	$circle.attr({
		 cx : "100",
		 cy : "100",
		 r :"20",
		 style : blackStroke
	});
	$circle.appendTo($g);
	$g.appendTo($svg);
}

function getFrames(){
	var lambda = 30;
	var wRect = 300;
	var hRect = 200;

	var x1 = W/6;
	var y1 = H - hRect - 30*5;
	var sin60 = Math.sin(Math.PI/3);
	var cos60 = Math.cos(Math.PI/6);
	var frames = [];

	for(var i = 0 ; i < 5 ; i++){
		frames.push({
			x : x1 + i * lambda * sin60,
			y : y1 - (i * lambda * cos60),
			height : hRect,
			width : wRect
		});
	}
	return frames;
}

function addBarCharts(frames){
	$.each(frames, function(idx, f){
		addBarInFrame(f);
	});
}

function addBarInFrame(f){
	var top = f.y;
	var left = f.x;
	var h = f.height;
	var w = f.width;

	var sTrans = 'translate(' + left + ',' + (top + h)+ ') scale(1,-1)';
	var $g = $('<g stroke="#2b908f"></g>');
	$g.attr('transform', sTrans);
	
	var path = new Path();
	path.moveTo(0,0);
	path.lineTo(0,80);
	path.lineTo(20,80);
	path.lineTo(20,0);
	path.lineTo(20, 50);
	path.lineTo(50, 50);
	path.lineTo(50, 0);

	var $p = $('<path stroke-linejoin="round"></path');
	$p.attr({
		d : path.toString(),
		fill : fillBar
	});
	$p.attr('fill-opacity', '0.5');

	$p.appendTo($g);
	$g.appendTo($('#frameGroup'));

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

$(document).ready(onLoad);







