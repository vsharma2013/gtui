
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

	var frames = getFrames(5, 300, 200, 30);
	addBarCharts(frames);
	refreshView();

	addMouseEventHandlers();
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
	
	var path = getRandomPathForFrame(0, 0, f.width, f.height);

	var $p = $('<path stroke-linejoin="round"></path');
	$p.attr({
		d : path.toString(),
		fill : fillBar
	});
	$p.attr('fill-opacity', '0.5');

	$p.appendTo($g);
	$g.appendTo($('#frameGroup'));

}

var isRotating = false;

function addMouseEventHandlers(){
	$('#frameGroup').on('mousedown', trapRotation);
	$('#frameGroup').on('mouseup', ceaseRotation);
	$('#frameGroup').on('mouseover', rotate);

}

function trapRotation(e){
	isRotating = true;
}

function ceaseRotation(e){
	isRotating = false;
}

function rotate(e){
	if(!isRotating) return;

	console.log(e);
}

$(document).ready(onLoad);








