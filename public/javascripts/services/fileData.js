app.service('fileData', function($http, $q) {
	return {
		$http.get('/thisURL').
		success(function(data, status, headers, config) {
		// download the shit
			console.log("yay");
		}).
		error(function(data, status, headers, config) {
		// send an error msg
		});
	}
});