app.factory('userData', function userData($http, requester, baseServiceUrl, authentication) {
    var serviceUrl = baseServiceUrl + 'users';
    var service = {};

    service.getUserPreviewData = function(userName){
        return requester('get', serviceUrl + '/' + userName + '/preview', authentication.getHeaders());
    };

    service.getUserFullData = function(userName){
        return requester('get', serviceUrl + '/' + userName, authentication.getHeaders());
    };

    service.searchUsersByName = function(keyword){
        return requester('get', serviceUrl + '/search?searchTerm=' + keyword, authentication.getHeaders());
    };

    service.getFriendWallByPages = function(userName, startPostId){
        return requester('get', serviceUrl + '/' + userName + '/wall?StartPostId=' + startPostId + '&PageSize=5', authentication.getHeaders());
    };

    service.getFriendsDetailedFriendsList = function (userName){
        return requester('get', serviceUrl + '/' + userName + '/friends', authentication.getHeaders());
    };

    service.getFriendsFriendsPreview = function (userName){
        return requester('get', serviceUrl + '/' + userName + '/friends/preview', authentication.getHeaders());
    };

    return service;
});