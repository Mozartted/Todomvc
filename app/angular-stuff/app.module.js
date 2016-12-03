angular.module('TodoMVC',['ngRoute','ngResource'])
.config(['$routeProvider'],function(){
    'use strict';

    var routeConfig={
            'controller':'TodoController',
            'templateUrl':'angular-stuff/html/todo.html',
            resolve: {
				store: function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
    };

    $routeProvider
    .when('/',routeConfig)
    .otherwise({
        redirectTo:'/'
    });

});
