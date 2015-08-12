var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', PhoneListCtrl);
phonecatControllers.controller('PhoneDetailCtrl', PhoneDetailCtrl);

function PhoneListCtrl($scope, $http){
	$http.get('/api/phones').success(function(phones){
		$scope.phones = phones; 
	});
 	$scope.orderProp = 'name';
}

PhoneListCtrl.$inject =['$scope', '$http'];


function PhoneDetailCtrl($scope, $routeParams, $http){
	$http.get('/api/phones/' + $routeParams.phonesId).success(function(data){
		$scope.phone = data;
	});
}

PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];
