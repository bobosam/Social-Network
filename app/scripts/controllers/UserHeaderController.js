app.controller('UserHeaderController', function UserHeaderController($scope,
                                                                     $location,
                                                                     notify,
                                                                     authentication,
                                                                     userData,
                                                                     profileData) {
    $scope.userName = authentication.getUserName();
    $scope.isFriendRequestsVisible = false;
    $scope.isSearchResultsVisible = false;

    userData.getUserPreviewData($scope.userName)
        .then(function successHandler(data) {
            $scope.name = data.name;
            if (data.profileImageData) {
                $scope.profileImageData = data.profileImageData;
            } else {
                document.getElementById('me-preview').src = 'img/noAvatar.jpg';
            }

            authentication.setName($scope.name);
            authentication.setProfileImageData($scope.profileImageData);
        },
        function errorHandler(error) {
            console.log(error);
        }
    );

    profileData.getFriendRequests()
        .then(function successHandler(data) {
            $scope.requests = data;
            $scope.requestsCount = data.length;
        },
        function errorHandler(error) {
            console.log(error);
        }
    );

    $scope.logout = function () {
        authentication.logout()
            .then(function successHandler(data) {
                authentication.clearCredentials();
                notify.info("Logout successful.");
                $location.path('/')
            },
            function errorHandler(error) {
                notify.error("Logout failed!");
            }
        );
    };

    $scope.showFriendRequests = function (event) {
        var leftPosition = event.screenX;
        var topPosition = event.screenY + 10;
        var container = document.getElementById('friendRequestsContainer');
        container.style.top = topPosition + 'px';
        container.style.left = leftPosition + 'px';
        $scope.isFriendRequestsVisible = true;
    };

    $scope.approveFriendRequest = function (request) {
        profileData.approveFriendRequest(request.id)
            .then(function successHandler(data) {
                var index = $scope.requests.indexOf(request);
                $scope.requests.splice(index, 1);
                $scope.requestsCount--;
                notify.info("Friend request accepted.")
            },
            function errorHandler(error) {
                notify.error("Approve failed.");
            }
        );
    };

    $scope.rejectFriendRequest = function(request){
        profileData.rejectFriendRequest(request.id)
            .then(function successHandler(data){
                var index = $scope.requests.indexOf(request);
                $scope.requests.splice(index, 1);
                $scope.requestsCount--;
                notify.info("Friend request rejected.");
            },
        function errorHandler(error){
            notify.error("Reject failed!")
        })
    };

    $scope.searchPeople = function (keyword) {
        if(keyword.length == 0) {
            $scope.areSearchResultsVisible = false;
            return;
        }

        userData.searchUsersByName(keyword)
            .then(
            function successHandler(data) {
                $scope.people = data;
                $scope.peopleCount = data.length;
                $scope.showSearchResults();
                console.log(data);
            },
            function (error) {
                console.log(error);
            }
        );
    };

    var searchX,searchY;
    $scope.setCoordinates = function ($event) {
        searchX = $event.srcElement.offsetLeft;
        searchY = $event.srcElement.offsetTop;
    };

    $scope.showSearchResults = function ($event, keyword) {

        console.log();

        if(keyword.length == 0) {
            $scope.areSearchResultsVisible = false;
            return;
        }

        userData.searchUsersByName(keyword)
            .then(
            function successHandler(data) {
                $scope.people = data;
                $scope.peopleCount = data.length;

                var leftPosition = searchX,
                    topPosition = searchY + 40,
                    container = document.getElementById('peopleSearchContainer');

                container.style.top = topPosition + 'px';
                container.style.left = leftPosition + 'px';

                $scope.areSearchResultsVisible = true;
            },
            function (error) {
                console.log(error);
            }
        );
    };
});