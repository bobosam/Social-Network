app.directive('comment', function () {
    return {
        restrict: 'C',
        templateUrl: 'templates/directives/comment.html',
        controller: 'CommentController',
        replace: false
    }
});