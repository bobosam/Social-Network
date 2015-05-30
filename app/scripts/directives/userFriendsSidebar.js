app.directive('userFriendsSidebar', function () {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/user-friends-sidebar.html',
        controller: 'UserFriendsController',
        replace: false,
        scope: {
            test: "@test"
        }
    }
});