app.factory('postsData', function postsData($http, requester, authentication, baseServiceUrl) {
    var serviceUrl = baseServiceUrl + 'Posts';
    var service = {};

    service.getPostById = function (id) {
        return requester('get', serviceUrl + '/' + id, authentication.getHeaders());
    };

    service.getsPostDetailedLikes = function (id) {
        return requester('get', serviceUrl + '/' + id + '/likes', authentication.getHeaders());
    };

    service.getsPostPreviewLikes = function(id){
        return requester('get', serviceUrl + '/' + id + '/likes/preview', authentication. getHeaders());
    };

    service.addNewPost = function(content, userName){
        var data= {
            postContent: content,
            username: userName
        };

    return requester('post', baseServiceUrl + 'posts', authentication.getHeaders(), data);
    };

    service.editPostById = function(content, id){
        var data = {
            postContent: content
        };

        return requester('put', serviceUrl +'/' + id, authentication.getHeaders(), data);
    };

    service.deletePostById = function(id){
        return requester('delete', serviceUrl + '/' +id, authentication.getHeaders());
    };

    service.likePost = function(id){
        return requester('post', serviceUrl + '/' + id + '/likes', authentication.getHeaders());
    };

    service.unlikePost = function(id){
        return requester('delete', serviceUrl + '/' + id + '/likes', authentication.getHeaders());
    };

    return service;
});