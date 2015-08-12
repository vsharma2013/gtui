function ApiController(){

}

ApiController.prototype.handleDefaultRequest = function(req, res){
	res.json({success: true, message : 'Hello from ng-controller'});
}

var gApiController = new ApiController();

module.exports = gApiController;