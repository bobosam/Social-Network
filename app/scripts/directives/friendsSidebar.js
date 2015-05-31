socialNetwork.directive('friendsSidebar', function() {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/friends-sidebar.html',
        controller: 'HomeController',
        scope: {
            sidebarUsername: "=sidebarUsername"
        },
        replace: true
    }
});