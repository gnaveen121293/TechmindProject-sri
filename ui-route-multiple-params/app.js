var app = angular.module("myApp",['ui.router']);

app.config(["$locationProvider", function($locationProvider){
	$locationProvider.hashPrefix('')
}])

app.config(["$stateProvider", function($stateProvider){
	
	$stateProvider
		.state("home",{
			url:'/',
			templateUrl: "pages/home.html",
			controller: "myHomeController"
		})
		.state("register",{
			url:'/register?contactId&email',
			templateUrl : "pages/register.html",
			controller: "myRegisterController",
			caseInsensitiveMatch : true
		})
		.state("login", {
			url:'/login',
			templateUrl: "pages/login.html",
			controller:"myLoginController"
		})
}])
app.controller("myHomeController", ["$scope", function($scope){
	$scope.message = "This is my home controller";
}])

app.controller("myRegisterController", ["$scope","$stateParams", function($scope,$stateParams){
	//expect($stateParams).toBe({contactId: "42"});
	
	$scope.message= "This is my register controller :UI-routing parameter example"+"";
	$scope.contactno = "contact number is:"+$stateParams.contactId;
	$scope.emaiId = "Email id is:"+$stateParams.email;

}])

app.controller("myLoginController", ["$scope", function($scope){
	$scope.message = "This is my login controller";
}])

