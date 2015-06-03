
var H = window.innerHeight;
var W = window.innerWidth;

function onReady(){
	var svgApp = new SVGApp();
}

function SVGApp(){
	this.init();
}

SVGApp.prototype.init = function(){
	var frames = getFrames(1, 300, 200, 30);
	var path = getRandomPathForFrame(0, 0, frames[0].width, frames[0].height);

	var top = frames[0].y;
	var left = frames[0].x;
	var h = frames[0].height;
	var w = frames[0].width;

	var sTrans = 'translate(' + left + ',' + (top + h)+ ') scale(1,-1)';
	var $g = $('<g stroke="#2b908f"></g>');
	$g.attr('transform', sTrans);
	
	var $p = $('<path stroke-linejoin="round"></path');
	$p.attr({
		d : path.toString(),
		fill : fillBar
	});
	$p.attr('fill-opacity', '0.5');

	$p.appendTo($g);
	$g.appendTo($('#frameGroup'));

	refreshView();
}


































$(document).ready(onReady);