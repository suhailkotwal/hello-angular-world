(function () {
    angular
        .module('hello.angular.world', ['ngRoute'])        
        .config(['$routeProvider', function ($routeProvider) {
               
            $routeProvider
                .when('/', {
                    templateUrl: 'home.html',
                    controller: 'homeController'
                })            
        }]);
})();