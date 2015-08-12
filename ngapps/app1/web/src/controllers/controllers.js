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


function PhoneDetailCtrl($scope, $routeParams){
	$scope.phoneId = $routeParams.phoneId;
}

PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];
