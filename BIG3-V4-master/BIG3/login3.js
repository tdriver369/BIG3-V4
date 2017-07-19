var app = angular.module('myApp', []);
app.controller('homepage', function($scope) {
	$scope.logButton = true;
	$scope.confirm = false;

	$scope.changeLog = function(){
		$scope.logButton = true;
		$scope.signButton = false;
		$scope.confirm = false;
	}

	$scope.changeSign = function(){
		$scope.logButton = false;
		$scope.signButton = true;
		$scope.confirm = true;
	}


});