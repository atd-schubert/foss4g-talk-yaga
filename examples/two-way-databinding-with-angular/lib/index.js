/**
 * Created by atd on 24.08.16.
 */

var angular = require('angular');

angular.module('sampleApp', [])
    .controller('sampleCtrl', ['$scope', function($scope) {
        $scope.result = 'This is data that can be binded in two ways';

        window.globalScope = $scope;
    }]);