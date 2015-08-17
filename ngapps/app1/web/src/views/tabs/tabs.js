angular
.module('tabsApp', [])
.directive('myTabs', function(){
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
})
.directive('myPane', function(){
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
	};	
});


