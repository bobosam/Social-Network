var socialNetwork = angular.module('socialNetwork', ['ngRoute']);

socialNetwork.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.
            when('/welcome', {
                templateUrl: 'templates/partial/welcome.html',
                controller: 'WelcomeController'
            });

        $routeProvider.
            when('/login', {
                templateUrl: 'templates/partial/login.html',
                controller: 'LoginController'
            });

        $routeProvider.
            otherwise({
                redirectTo: '/welcome'
            });
    }]);

socialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');