app.controller('TodoController',function TodoController ($scope,$routeParams,$filter,store){
        //the todo controller would be handling new additions to the
        //todo list and applying these to the DB via node and $resource

        'use strict';
        var self=this;

        var todos = $scope.todos = store.todos;

        self.newTask = ' ';

        $scope.addTodo = function()
        {
            var newTask={
                title:$scope.newTask.trim(),
                completed:false
            }

            store.insert(newTask)
            .then(function success() {
                $scope.newTask = '';
            })
            .finally(function () {
                self.saving = false;
            });

        }
    });
