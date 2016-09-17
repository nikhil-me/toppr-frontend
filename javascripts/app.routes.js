angular.module('searchApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/search', {

		templateUrl: '/views/main.html'
	})

	.otherwise('/search');

});