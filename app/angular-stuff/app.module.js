angular.module('TodoMVC',['ngRoute','ngResource'])
.config(['$routeProvider'],function(){
    'use strict';

    var routeConfig={
            'controller':'TodoController',
            'templateUrl':'scripts/html/todo.html'
    };
});
