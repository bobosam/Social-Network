app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function ($resource, baseServiceUrl, authentication) {

    function registerUser(user) {
        return $resource(baseServiceUrl + 'users/register')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(data);
            })
    }

    function loginUser(user) {
        return $resource(baseServiceUrl + 'users/login')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(data);
            })
    }

    function logoutUser() {
        return $resource(baseServiceUrl + 'users/logout')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.removeUser(data);
            })
    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}])