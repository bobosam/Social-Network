socialNetwork.factory('postsData', function postsData($http, requester, authentication , baseServiceUrl) {
    var serviceUrl = baseServiceUrl + 'Posts';
    var service = {};

    service.getPostById = function getPostById(id) {
        return requester('GET', serviceUrl + '/' + id, authentication.getHeaders());
    };

    service.getPostDetailedLikes = function getPostDetailedLikes(id) {
        return requester('GET', serviceUrl + '/' + id + '/likes', authentication.getHeaders());
    };

    service.getPostPreviewLikes = function getPostPreviewLikes(id) {
        return requester('GET', serviceUrl + '/' + id + '/likes/preview', authentication.getHeaders());
    };

    service.addPost = function addPost(content, username) {
        var data = {
            postContent: content,
            username: username
        };

        return requester('POST', baseServiceUrl + 'posts', authentication.getHeaders(), data);
    };

    service.editPostById = function editPostById(content, id) {
        var data = {
            postContent: content
        };

        return requester('PUT', serviceUrl + '/' + id, authentication.getHeaders(), data);
    };

    service.deletePostById = function deletePostById(id) {
        return requester('DELETE', serviceUrl + '/' + id, authentication.getHeaders());
    };

    service.likePostById = function likePostById(id) {
        return requester('POST', serviceUrl + '/' + id + '/likes', authentication.getHeaders());
    };

    service.unlikePostById = function unlikePostById(id) {
        return requester('DELETE', serviceUrl + '/' + id + '/likes', authentication.getHeaders());
    };

    return service;
});