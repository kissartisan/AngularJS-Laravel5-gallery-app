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
myApp.controller('globalController', ['$scope', function($scope) {
	$scope.global = {};
	$scope.global.navUrl = 'templates/partials/nav.html';
}]);
myApp.controller('navController', ['$scope', '$location', 'userModel', function($scope, $location, userModel) {

	// Variables
	angular.extend($scope, {
		user: userModel.getUserObject(),
		navUrl: [{
			link: 'Home',
			url: '/dashboard',
			subMenu: [{
				link: 'View Gallery',
				url: '/gallery/view',
			}, {
				link: 'Add Gallery',
				url: '/gallery/add',
			}]
		}, {
			link: 'Testing',
			url: '/gallery/view'
		}, {
			link: 'Yow yow daddyow',
			url: '/gallery/add'
		}]
	});

	// Methods
	angular.extend($scope, {
		doLogout: function() {
			userModel.doUserLogout();
			$location.path('/');
		},
		checkActiveLink: function(routeLink) {
			if ($location.path() == routeLink) {
				return 'make-active';
			}
		}
	});
}]);
myApp.controller('galleryController', ['$scope', '$location', function($scope, $location) {
	// Variables
	angular.extend($scope, {
		newGallery: {},
		errorDiv: false,
		errorMessages: [],
	});

	// Functions
	angular.extend($scope, {
		saveNewGallery: function(addGalleryForm) {
			console.log(addGalleryForm);
			if (addGalleryForm.$valid) {
				console.log('Correct');
			} else {
				console.log('Error');
			}
		}
	});
}]);
//# sourceMappingURL=controllers.js.map
