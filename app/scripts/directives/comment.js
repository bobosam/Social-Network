socialNetwork.directive('comment', function () {
    return {
        restrict: 'EC',
        templateUrl: 'templates/directives/comment.html',
        controller: 'CommentController',
        replace: false
    }
});