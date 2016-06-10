myApp.factory('userModel', ['$http', '$cookies', function($http, $cookies) {
	var userModel = {};
	userModel.doLogin = function(loginData) {
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url: baseUrl + 'auth',
			method: "POST",
			data: {
				email: loginData.email,
				password: loginData.password
			}
		}).success(function(response) {
			console.log(JSON.stringify(response));
			// Add the cookie and make it a JSON object
			$cookies.put('auth', JSON.stringify(response));
		// If the login was now successful
		}).error(function(data, status, headers) {
			console.log(data, status, headers);
			alert(data);
		});
	};

	userModel.getAuthStatus = function() {
		var status = $cookies.get('auth');
		if (status) {
			return true;
		} else {
			return false;
		}
	};

	userModel.doUserLogout = function() {
		$cookies.remove('auth');
	};

/**
 * Get the user object converted from string to JSON
 * @return {user object} [description]
 */
	userModel.getUserObject = function() {
		var userObj = angular.fromJson($cookies.get('auth'));

		return userObj;
	};

	return userModel;
}]);