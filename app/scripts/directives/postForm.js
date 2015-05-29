app.directive('postForm', function() {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/post-form.html',
        controller: 'HomeController',
        replace: true
    }
});