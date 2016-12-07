var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
	$routeProvider
		.when("/", {
			templateUrl: "./assets/angular/partials/loginreg.html",
			controller: "SessionsController"
		})
		.when("/dashboard", {
			templateUrl: "./assets/angular/partials/dashboard.html",
			controller: "DashboardController"
		})
		.when("/topic/:id", {
			templateUrl: "./assets/angular/partials/showTopic.html",
			controller: "TopicsController"
		})
		.when("/user/:id", {
			templateUrl: "./assets/angular/partials/showUser.html",
			controller: "UsersController"
		})
})