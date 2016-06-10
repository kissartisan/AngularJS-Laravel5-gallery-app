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