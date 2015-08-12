
var phonecatDependencies = ['ngRoute', 'phonecatControllers', 'PhoneService'];

var phonecatApp = angular.module('phonecatApp', phonecatDependencies);

phonecatApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/phones', phonesRoute)
	.when('/phones/:phonesId', phoneDetailsRoute)
	.otherwise({redirectTo : '/phones'})
}]);

var phonesRoute = {
	templateUrl : 'src/views/phone-list.html',
	controller : 'PhoneListCtrl'
};

var phoneDetailsRoute = {
	templateUrl : 'src/views/phone-detail.html',
	controller : 'PhoneDetailCtrl'
};
