myApp.controller('userController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
	// Variables
	angular.extend($scope, {
		login: {
			username: 'ladymorgannelumbre05@gmail.com',
			password: 'pass'
		}
	});

	// Functions
	angular.extend($scope, {
		doLogin: function(loginForm) {
			var data = {
				email: $scope.login.username,
				password: $scope.login.password
			};

			userModel.doLogin(data).then(function() {
				$location.path('/dashboard');
			});
		}
	});

}]);