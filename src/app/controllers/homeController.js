(function () {
    angular
        .module('hello.angular.world')
        .controller('homeController', ['$scope', function ($scope) {
            $scope.message = "Hello Angular World!!";    
        }]);
}());