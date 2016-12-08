app.controller('TodoController',function TodoController ($routeParams,$filter,store){
        //the todo controller would be handling new additions to the
        //todo list and applying these to the DB via node and $resource

        'use strict';
        var self=this;

        var todos = self.todos = store.todos;

        self.newTask = ' ';

        self.addTodo = function(task)
        {
            var newTask={
                title:$ctrl.newTask.trim(),
                completed:false
            }

            store.insert(newTask)
            .then(function success() {
                self.newTodo = '';
            })
            .finally(function () {
                self.saving = false;
            });

        }





    });
