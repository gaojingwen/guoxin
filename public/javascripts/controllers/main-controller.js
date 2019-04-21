var mainApp = angular.module('mainApp', [])
    .filter('trustAsResourceUrl', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsResourceUrl(val);
        };
    }])
    .filter('customNumber', function () {
        return function (value) {
            if (value) {
                return value.toFixed(2); //convert to int
            } else {
                return '';
            }

        }
    });


//Controller间通信的服务
mainApp.factory('Service', function () {
    return {

    }
});

//添加滚动事件的处理(滚到底部)
mainApp.directive('scrolly', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var raw = element[0];
            element.bind('scroll', function () {
                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                    scope.$apply(attrs.scrolly);
                }
            });
        }
    };
});

/**
 * 全局controller
 * 长链接部分
 */

mainApp.controller('mainController', function ($scope, Service, $http, $sce, $interval, $timeout, $filter) {
});
