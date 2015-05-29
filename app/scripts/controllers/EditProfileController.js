app.controller('EditProfileController', function EditProfileController($scope, $location, authentication, profileData, notify) {
        if (!authentication.isLogged()) {
            $location.path('/');
            return;
        }

        profileData.getDataAboutMe()
            .then(function successHandler(data) {
                $scope.data = data;
                if (!data.profileImageData) {
                    document.getElementById('profileImagePreview').src = "img/noAvatar.jpg";
                }
                if (!data.coverImageData) {
                    document.getElementById('coverImagePreview').src = "img/noCover.png";
                }
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

        $scope.getProfileImage = function () {
            $('#profileImageSelector').click()
                .on('change', function () {
                    var file = this.files[0];
                    if (file.type.match(/image\/.*/)) {
                        var reader = new FileReader();
                        reader.onload = function () {
                            $('#profileImagePreview')
                                .text(file.name)
                                .attr('src', reader.result);
                            $scope.data.profileImageData = reader.result;
                        };
                        reader.readAsDataURL(file);
                    } else {
                        notify.error("Invalid file format.");
                    }
                });
        };

        $scope.getCoverImage = function () {
            $('#coverImageSelector').click()
                .on('change', function () {
                    var file = this.files[0];
                    if (file.type.match(/image\/.*/)) {
                        var reader = new FileReader();
                        reader.onload = function () {
                            $('#coverImagePreview')
                                .text(file.name)
                                .attr('src', reader.result);
                            $scope.data.coverImageData = reader.result;
                        };
                        reader.readAsDataURL(file);
                    } else {
                        notify.error("Invalid file format.");
                    }
                });
        };

        $scope.cancelSave = function () {
            $location.path('/users/me');
        };

        $scope.editProfile = function (profile, editProfileForm) {
            if (editProfileForm.$valid) {
                authentication.editProfile(profile)
                    .then(
                    function successHandler(data) {
                        authentication.setName(data.name);
                        authentication.setProfileImageData(data.profileImageData);
                        authentication.setCoverImageData(data.coverImageData);
                        notify.info("Profile change successful.");
                        $location.path('/users/me');
                    },
                    function errorHandler(error) {
                        notify.error("Profile change failed.");
                    }
                )
            }
        };
    });