var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', PhoneListCtrl);
phonecatControllers.controller('PhoneDetailCtrl', PhoneDetailCtrl);

function PhoneListCtrl($scope, Phone, myEmptyService){
	$scope.phones = Phone.query();
 	$scope.orderProp = 'name';
}

PhoneListCtrl.$inject =['$scope', 'Phone', 'myEmptyService'];


function PhoneDetailCtrl($scope, $routeParams, Phone, myEmptyService){
	$scope.phone = Phone.get({phoneId: $routeParams.phonesId}, function(phone) {
	    $scope.mainImageUrl = phone.images[0];
	});
}

PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone', 'myEmptyService'];
