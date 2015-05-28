app.controller('HomeController', function HomeController($scope, $location, notify, authentication, postsData, profileData) {
    if (!authentication.isLogged()) {
        $location.path('/');
        return;
    }

    $scope.isUserPreviewVisible = false;
    $scope.name = authentication.getName();
    $scope.userName = authentication.getUserName();

    profileData.getNewsFeedPages("")
        .then(function successHandler(data) {
            $scope.posts = data;
            if (data.length === 0) {
                $scope.isNewsFeedEmpty = true;
            }
        },
        function errorHandler(error) {
            notify.error("Loading news feed failed!");
        }
    );

    profileData.getOwnFriends()
        .then(function successHandler(data) {
            $scope.friends = data;
            $scope.friendsCount = data.length;
        },
        function errorHandler(error) {
            notify.error("Loading own friends failed!")
        }
    );

    $scope.addNewPost = function () {
        postsData.addNewPost($scope.postContent, authentication.getUserName())
            .then(function successHandler(data) {
                $scope.posts.push(data);
                notify.info("Post successful.");
                $scope.postContent = '';
            },
            function errorHandler(error) {
                notify.error("Add post failed!");
            }
        );
    };

    $scope.$on('deletePost', function (event, data) {
        var index = $scope.posts.indexOf(data);
        if (-1 < index) {
            $scope.posts.splice(index, 1);
        }
    });
});