var app = angular.module("app", ['ngRoute']);

var mycontrollers = {}

app.controller(mycontrollers);

mycontrollers.MenuController = ["$scope", "$location", function($scope, $location) {
    $scope.getClass = function(mypath) {
		if($location.path().substr(0, mypath.length) === mypath) {
			return "active";
		} else {
			return "";
		}
	};
}];

app.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/about", {
			templateUrl: "partials/about.html"
		})
		.when("/home", {
			templateUrl: "partials/home.html"
		})
		.when("/contact", {
			templateUrl: "partials/contact.html"
		})
		.when("/shivaji", {
			templateUrl: "partials/shivaji.html"
		})
		.when("/dyaneshwari", {
			templateUrl: "partials/dyaneshwari.html"
		})
		.when("/tukaram", {
			templateUrl: "partials/tukaram.html"
		})
		.when("/", {redirectTo: "/home"})
		.otherwise("/");
}]);
