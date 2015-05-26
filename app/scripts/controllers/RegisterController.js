app.controller('RegisterController', ['$scope', 'userData', '$location', function ($scope, userData, $location) {
    $scope.register = function (user) {
        userData.register(user)
    }

    $scope.cancelRegister = function cancelRegister() {
        $location.path('/');
    }

}]);
