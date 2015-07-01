// MainController.js
// Maintains the model (data)

var mainCtrl = angular.module('mainCtrl', [])

.controller('MainController', function($scope) { 
	$scope.title = "Yo";
	$scope.seeFiles = function() {
		$routeProvider.otherwise({redirectTo: "/downloads"});
	};
	$scope.debug = function() {
		console.log("debug");
	};
});
