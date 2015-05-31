socialNetwork.directive('userHeader', function() {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/user-header.html',
        controller: 'UserHeaderController',
        replace: true
    }
});