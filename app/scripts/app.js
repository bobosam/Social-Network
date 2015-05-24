var app = angular.module('socialNetwork', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
                templateUrl: 'templates/welcome.html',
                controller: 'WelcomeController'
            });

        $routeProvider.when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

        $routeProvider.otherwise({
                redirectTo: '/'
            });
    }]);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');