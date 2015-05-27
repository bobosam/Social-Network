app.factory('authentication', function authentication($http, requester, baseServiceUrl){
    var serviceUrl = baseServiceUrl + 'users';
    var service = {};

    service.userLogin = function(loginData){
        return requester('post', serviceUrl + '/login', null, loginData);
    };

    service.userRegister = function(registerData){
        return requester('post', serviceUrl +'/register', null, registerData);
    };

    service.userLogout = function(){
        return requester('post', serviceUrl + '/logout', this.getHeaders());
    };

    service.editProfile = function(profileData){
        return requester('put', baseServiceUrl + 'me', this.getHeaders(), profileData);
    };

    service.getHeaders = function(){
        return{
            Authorization: 'Bearer ' + localStorage['accessToken']
        }
    };

    service.setCredentials = function(serverData){
        localStorage['accessToken']= serverData.access_token;
        localStorage['userName'] = serverData.userName;
    };

    service.clearCredentials = function(){
        localStorage.clear();
    };

    service.getUserName = function(){
        return localStorage['userName'];
    };

    service.isLogged = function(){
        return localStorage['accessToken'];
    };

    service.setName = function(name){
        localStorage['name'];
    };

    service.getName = function(){
        return localStorage['name'];
    };

    service.setProfileImageData = function (profileImageData){
        localStorage['profileImageData'] = profileImageData;
    };

    service.getProfileImageData = function(){
        return localStorage['profileImageData'];
    };

    service.setCoverImageData = function(coverImageData){
        localStorage['coverImageData'] = coverImageData;
    };

    service.getCoverImageData = function(){
        return localStorage['coverImageData'];
    };

    return service;
});