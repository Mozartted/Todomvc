angular.module('TodoMVC',['ngRoute','ngResource'])
.config(['$routeProvider'],function(){
    'use strict';

    var routeConfig={
            'controller':'TodoController',
            'templateUrl':'angular-stuff/html/todo.html'
    };

    $routeProvider
    .when('/',routeConfig)
    .otherwise({
        redirectTo:'/'
    })

});
