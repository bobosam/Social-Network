app.directive('editProfile', function() {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/edit-profile-form.html',
        controller: 'EditProfileController',
        replace: true
    }
});