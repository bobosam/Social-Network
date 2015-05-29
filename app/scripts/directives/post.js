app.directive('post', function () {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/post.html',
        controller: 'PostController',
        replace: true
    }
});