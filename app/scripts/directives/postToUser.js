socialNetwork.directive('postToUser', function() {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/post-to-user.html',
        controller: 'PostToUserController',
        replace: false,
        scope: {
            test2: "@test2",
            friend: "@friend"
        }
    }
});