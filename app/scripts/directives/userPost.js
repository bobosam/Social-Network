app.directive('userPost', function () {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/post.html',
        controller: 'UserPostController',
        replace: true
    }
});