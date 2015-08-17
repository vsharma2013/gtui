
var phonecatDependencies = ['ngRoute', 'phonecatControllers', 'PhoneService', 'tabsApp'];

var phonecatApp = angular.module('phonecatApp', phonecatDependencies);

phonecatApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/phones', phonesRoute)
	.when('/phones/:phonesId', phoneDetailsRoute)
	.when('/tabs', tabsRoute)
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

var tabsRoute = {
	templateUrl : 'src/views/tabs/index.html'
}
