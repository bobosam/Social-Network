app.controller('RegisterController', function RegisterController($scope, $location, notify, authentication) {
    $scope.register = function (registerData, registerForm) {
        if (registerForm.$valid) {
            authentication.register(registerData)
                .then(function successHandler(data) {
                    authentication.setCredentials(data);
                    notify.info("Registration successful.");
                    $location.path('/users/me');
                },
                function errorHandler(error) {
                    notify.error("Registration failed!");
                })
        }
    };

    $scope.cancelRegister = function () {
        $location.path('/');
    }

});
