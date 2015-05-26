app.factory('profileData', function profileData($http,requester, authentication, baseServiceUrl){
    var serviceUrl = baseServiceUrl +"me";
    var service = {};

    service.getDataAboutMe = function(){
        return requester('get', serviceUrl, authentication.getHeaders());
    };

    service.getOwnFriends = function(){
        return requester('get', serviceUrl + '/friends', authentication.getHeaders());
    };

    service.getFriendRequests = function(){
        return requester('get', serviceUrl + '/requests', authentication.getHeaders());
    };

    service.sendFriendRequest = function(userName){
        return requester('post', serviceUrl + '/requests/' + userName, authentication.getHeaders());
    };

    service.approveFriendRequest = function (requestId){
        return requester('put', serviceUrl + '/requests/' + requestId +'?status=approved', authentication.getHeaders());
    };

    service.rejectFriendRequest = function(requestId){
        return requester('put', serviceUrl + '/requests/' + requestId + '?status=rejected', authentication.getHeaders());
    };

    service.getNewsFeedPages = function (startPostId){
        return requester('get', serviceUrl + 'feed?StartPostId=' + startPostId + '&PageSize=5', authentication.getHeaders());
    };

    service.changeProfilePassword = function(passwordData){
        return requester('put', serviceUrl + 'me/changepassword', authentication.getHeaders(), passwordData);
    };

    return service;
});