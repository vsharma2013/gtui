var http = require('http');
var fs = require("fs");
var formidable = require('formidable');
var util = require('util');

function onRequest(request, response) {
    handleRequest(request, response);
}

function handleRequest(request, response){
	if(request.url === '/file'){
		response.setHeader('Access-Control-Allow-Origin', '*');
	    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	    response.setHeader('Access-Control-Allow-Credentials', true);
		processSaveFileRequest(request, response);
	}
	else{
		response.end("Hello from upload server");
	}
}

function processSaveFileRequest(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		if (err) {
			console.error(err.message);
			return;
		}
		res.writeHead(200, {'content-type': 'text/plain'});
		res.write('received upload:\n\n');
		if(files.file){
			fs.readFile(files.file.path, function (err, data) {
				var newPath = __dirname + '\\' + files.file.name;
	            fs.writeFile(newPath, data, function (err) {
	                res.end("done");
	            });
        	});
		}
		else{
			res.end('failed');
		}
	});
}


http.createServer(onRequest).listen(8080);
console.log('server up at port 8080');
