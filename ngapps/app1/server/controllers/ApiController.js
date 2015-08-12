var data = require('./../data/data');

function ApiController(){

}

ApiController.prototype.getPhones = function(req, res){
	res.json(data.phones);
}

var gApiController = new ApiController();

module.exports = gApiController;