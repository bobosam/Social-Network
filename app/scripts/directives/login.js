'use strict';

socialNetwork.directive('login', function() {
    return {
        restrict: 'AE',
        templateUrl: '../../templates/partials/directives/login-form.html',
        replace: true
    }
});