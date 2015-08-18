(function(){
	angular
		.module('PhoneService', ['ngResource'])
		.factory('Phone', Phone)
		.service('myEmptyService', myEmptyService);

	Phone.$inject = ['$resource'];

	function Phone($resource){
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

	function myEmptyService(){
	}
})();
