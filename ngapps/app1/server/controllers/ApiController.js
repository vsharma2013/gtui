var data = require('./../data/data');
var fs = require('fs');

function ApiController(){

}

ApiController.prototype.getPhones = function(req, res){
	res.json(data.phones);
}

ApiController.prototype.getPhoneById = function(req, res){
	var fileName = './server/data/' + req.params.phoneId + '.json';
	console.log(fileName);
	fs.readFile(fileName, function(err, data){
		res.json(JSON.parse(data));
	});
}

var gApiController = new ApiController();

module.exports = gApiController;