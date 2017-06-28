angular.module('portfolio', ['ngMaterial'])
.controller('mainctrl', function($scope){
	$scope.home = true;
	$scope.about = '';
	$scope.work = '';

	$scope.goto = function(navigation) {
		if(navigation == "home"){
			$scope.home = true;
			$scope.about = '';
			$scope.work = '';
			$scope.contact = '';
		}else if(navigation == "about"){
			$scope.home = '';
			$scope.about = true;
			$scope.work = '';
			$scope.contact = '';
		}else if(navigation == "work"){
			$scope.home = '';
			$scope.about = '';
			$scope.work = true;
			$scope.contact = '';
		}
	}
});

