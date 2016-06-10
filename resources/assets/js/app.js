// This is the main file where angular is defined
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
			templateUrl: 'templates/users/login.html',
			controller: 'userController',
		});

	$routeProvider.when('/dashboard', {
		templateUrl: 'templates/users/dashboard.html',
		controller: 'userController',
		authenticated: true
	});
	$routeProvider.when('/gallery/view', {
		templateUrl: 'templates/gallery/gallery-view.html',
		controller: 'userController',
		authenticated: true
	});
	$routeProvider.when('/gallery/add', {
		templateUrl: 'templates/gallery/gallery-add.html',
		controller: 'galleryController',
		authenticated: true
	});
	$routeProvider.when('/logout', {
		templateUrl: 'templates/users/logout.html',
		controller: 'galleryController',
		authenticated: true
	});
	$routeProvider.otherwise('/');
}]);

myApp.run(['$rootScope', '$location', 'userModel', function($rootScope, $location, userModel) {
	$rootScope.$on("$routeChangeStart", function(event, next, current) {
		if (next.$$route.authenticated) {
			// If the user is not authenticated
			if (!userModel.getAuthStatus()) {
				console.log('Not authenticated');
				$location.path('/'); // Redirect to home
			}
		}

		// Get back the user on the dashboard if it is logged in already
		if (next.$$route.originalPath == '/') {
			// console.log('Login page');
			if (userModel.getAuthStatus()) {
				$location.path(current.$$route.originalPath);
			}
		}
	});
}]);