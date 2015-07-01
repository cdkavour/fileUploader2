var profileCtrl = angular.module('profileCtrl', [])

.controller(['ProfileController', 'fileData',  function($scope, fileData) {
	$scope.title = "User's Files:";
	$scope.files = fileData;
}]);
