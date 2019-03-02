'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope', 'homeService', function($scope, homeService) {
    $scope.message = 'Hello from controller';

    homeService.getGreeting().then(res => {
        $scope.greeting = res.message;
    }, err => {
        console.log(err);
    });

    $scope.getTodos = (userId) => {
        homeService.getTodos(userId).then(res => {
            $scope.todos = JSON.parse(res);
        }, err => {
            console.log(err);
        });
    }
}])

.factory('homeService', ['$http', function($http) {
    return {
        getGreeting: () => {
            return $http.get('/greeting').then(res => res.data);
        },

        getTodos: (userId) => {
            return $http.get('/todos', {params: {userId}}).then(res => res.data);
        }
    };
}]);
