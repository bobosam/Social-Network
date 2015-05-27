var app = angular.module('socialNetwork', ['ngRoute', 'ui.bootstrap']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'templates/welcome.html',
            controller: 'WelcomeController'
        });
    $routeProvider.
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });
    $routeProvider.
        when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        });
    $routeProvider.
        when('/users/me', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        });
    $routeProvider.
        when('/users/:username', {
            templateUrl: 'templates/user-wall.html',
            controller: 'UserWallController'
        });
    $routeProvider.
        when('/users/:username/friends', {
            templateUrl: 'templates/friends.html',
            controller: 'FriendsController'
        });

    $routeProvider.
        when('/profile', {
            templateUrl: 'templates/edit-profile.html',
            controller: 'EditProfileController'
        });
    $routeProvider.
        when('/profile/password', {
            templateUrl: 'templates/change-password.html',
            controller: 'ChangePasswordController'
        });
    $routeProvider.
        when('/logout', {
            controller: 'LogoutController'
        });

    $routeProvider.
        otherwise({
            redirectTo: '/'
        });
}]);

