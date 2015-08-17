var phoneService = angular.module('PhoneService', ['ngResource']);

function Phone($resource){
	console.log(this);
	var qObj = {
		query : {
			method : 'GET',
			params : {
				phoneId : 'phones'				
			},
			isArray : true
		}
	};
	return $resource('/api/phones/:phoneId', {}, qObj);
}

Phone.$inject = ['$resource'];

phoneService.factory('Phone', Phone);

phoneService.service('myEmptyService', function() {
  console.log(this);
});