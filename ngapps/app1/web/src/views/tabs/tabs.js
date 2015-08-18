(function(){
	angular
	.module('tabsApp', [])
	.directive('myTabs', myTabs)
	.directive('myPane', myPane);
	
	function myTabs(){
		return {
			restrict : 'E',
			transclude : true,
			scope : {},
			controller : function($scope){
				var panes = $scope.panes = [];
				$scope.select = function(pane){
					angular.forEach(panes, function(pane){
						pane.selected = false;
					});
					pane.selected = true;
				}
				this.addPane = function(pane){
					if(panes.length === 0){
						$scope.select(pane);
					}
					panes.push(pane);
				}
			},
			templateUrl : 'src/views/tabs/tabs.html'
		}
	} 
	
	function myPane(){
		return {
			require : '^myTabs',
			restrict : 'E',
			transclude : true,
			templateUrl : 'src/views/tabs/pane.html',
			scope : {
				title : '@'
			},
			link : function(scope, element, attrs, tabsController){
				tabsController.addPane(scope);
			}
		}
	};
})();