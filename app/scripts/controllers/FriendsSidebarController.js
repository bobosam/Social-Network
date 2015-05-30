app.controller('FriendsSidebarController', function FriendsSidebarController($scope, authentication, userData, sidebarUsername) {

    $scope.sidebarUsername = sidebarUsername;

    userData.getFriendsFriendsPreview($scope.sidebarUsername)
        .then(function successHandler(data) {
            $scope.username = $scope.sidebarUsername;
            $scope.friends = data.friends;
            $scope.friendsCount = data.totalCount;
        },
        function errorHandler(error) {
            console.log(error);
        }
    );

    userData.getUserPreviewData($scope.sidebarUsername)
        .then(function successHandler(data) {
            $scope.name = data.name;
        },
        function errorHandler(error) {
            console.log(error);
        }
    );
});



