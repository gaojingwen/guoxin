mainApp.controller('homeController', function ($scope, $http) {
    // $http.get('https://app.alldobetter.com/gxzq/api/edusite/cms/grids/tier').success(function(data) {
    //     console.log(data);
    // });
    $scope.router = function(n) {
        switch (n) {
            case 1:
                location.href = '/cms_01';
                break;
            case 2:
                location.href = '/cms_02';
                break;
            case 3:
                location.href = '/cms_03';
                break;
            case 4:
                location.href = '/cms_04';
                break;
            case 5:
                location.href = '/cms_05';
                break;
            case 6:
                location.href = '/cms_06';
                break;
            case 7:
                location.href = '/cms_07';
                break;
            default:
                break;
        }
    };
//
    $scope.bodyRouter_01 = function (n) {
        var pathName = location.pathname;
        if(pathName.indexOf('/cms_01') > -1) {
            location.href = '/cms_01/_01/:' + n;
        }else if(pathName.indexOf('/cms_02') > -1) {

        }
    };

    $scope.bodyRouter_02 = function (n) {
        var pathName = location.pathname;
        if(pathName.indexOf('/cms_05') > -1) {
            location.href = '/cms_05/_01';
        }else {
            location.href = '/cms_01';
        }

    }

    $scope.bodyRouter_03 = function () {
    }

    $scope.checkBox = function ($event) {
        console.log($event.target.checked);
    }

});