'use strict';

angular.module('app', [
    'ngRoute',
    'app.home'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise('/home');
}]);
