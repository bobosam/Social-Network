socialNetwork.directive('allFriends', function() {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/all-friends.html',
        controller: 'FriendsController',
        replace: true
    }
});