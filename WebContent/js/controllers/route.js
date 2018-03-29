var app = angular.module('myApp', ['ui.router','ngMaterial', 'ngMessages', 'nvd3']);
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when("", "/home");
		$urlRouterProvider.when("/home", "/home/main");
		$stateProvider
	    .state('home', {
	        url: '/home',
	        templateUrl: './main/home.html',
	        controller: 'homeCtrl',
	        controllerAs: 'home'
	    })
	    .state('home.main', {
	        url: '/main',
	        templateUrl: './views/main.html',
	        controller: 'mainCtrl',
	        controllerAs: 'main'
	    });
	}]);