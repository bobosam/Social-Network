app.controller('FriendsController', function FriendsController($scope, $routeParams, authentication, profileData, userData) {
    $scope.currentUser = authentication.getUserName();
    $scope.otherUser = $routeParams['username'];

    if ($scope.currentUser === $scope.otherUser) {
        $scope.otherUserName = $scope.currentUser;

        profileData.getOwnFriends()
            .then(function successHandler(data) {
                $scope.friends = data;
                $scope.friendsCount = data.length;
            },
            function errorHandler(error) {
                console.log(error);
            }
        );
    } else {

        userData.getUserPreviewData($scope.otherUser)
            .then(function successHandler(data) {
                $scope.otherUserName = data.name;
                userData.getFriendsDetailedFriendsList($scope.otherUser)
                    .then(function successHandler(data) {
                        $scope.friends = data;
                        $scope.friendsCount = data.length;
                    },
                    function errorHandler(error) {
                        console.log(error);
                    }
                );
            },
            function errorHandler(error) {
                console.log(error);
            }
        );
    }
});



