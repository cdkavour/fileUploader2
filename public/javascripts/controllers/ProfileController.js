app.controller('ProfileController', function($scope, fileData) {
	$scope.title = "User's Files:";
	$scope.files = fileData;
});