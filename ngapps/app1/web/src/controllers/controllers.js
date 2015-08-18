(function(){
	angular
		.module('phonecatControllers', [])
		.controller('PhoneListCtrl', PhoneListCtrl)
		.controller('PhoneDetailCtrl', PhoneDetailCtrl);

	PhoneListCtrl.$inject =['$scope', 'Phone', 'myEmptyService'];
	
	function PhoneListCtrl($scope, Phone, myEmptyService){
		$scope.phones = Phone.query();
	 	$scope.orderProp = 'name';
	}

	PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone', 'myEmptyService'];
	
	function PhoneDetailCtrl($scope, $routeParams, Phone, myEmptyService){
		$scope.phone = Phone.get({phoneId: $routeParams.phonesId}, function(phone) {
		    $scope.mainImageUrl = phone.images[0];
		});
	}	
})();
