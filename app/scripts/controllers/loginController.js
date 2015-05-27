app.controller('LoginController', function LoginController($scope, $location, notify, authentication) {
    $scope.login = function (loginData, loginForm) {
        if (loginForm.$valid) {
            authentication.login(loginData)
                .then(function successHandler(data) {
                    authentication.setCredentials(data);
                    notify.info("Login successful.");
                    $location.path('/users/me');
                },
                function errorHandler(error) {
                    notify.error("Login failed!");
                })
        }
    };

    $scope.cancelLogin = function () {
        $location.path('/');
    }
});
