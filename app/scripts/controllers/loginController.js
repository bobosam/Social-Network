app.controller('LoginController', ['$scope', 'userData', '$location', function($scope, userData, $location){
    $scope.login = function(user){
        userData.login(user);
    }

    $scope.cancelLogin = function cancelLogin() {
        $location.path('/');
    }
}]);
