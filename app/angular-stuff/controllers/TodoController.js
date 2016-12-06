app.controller('TodoController',function TodoController ($ctrl,$routeParams,$filter){
        //the todo controller would be handling new additions to the
        //todo list and applying these to the DB via node and $resource

        'use strict';

        $ctrl.newTask = ' ';

        $ctrl.addTodo = function()
        {
            var newTask={
                title:$ctrl.newTask.trim(),
                completed:false
            }
        }

        if(!newTask.title){
            return;
        }




    });
