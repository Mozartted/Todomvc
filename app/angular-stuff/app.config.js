app.config(['$routeProvider',function($routeProvider){
    'use strict';

    var routeConfig={
            controller:'TodoController',
            templateUrl:'angular-stuff/html/todo.html',
             resolve: {
                 store: function (TodoStore) {
 					// Get the correct module (API or localStorage).
 					return TodoStore.then(function (module) {
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

}]);
