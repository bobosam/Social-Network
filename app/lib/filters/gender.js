socialNetwork.filter('gender', function () {
    return function (input) {
        input = parseInt(input);
        switch (input) {
            case 1:
                return "img/male.png";
                break;
            case 2:
                return "img/female.png";
                break;
        }
    }
});