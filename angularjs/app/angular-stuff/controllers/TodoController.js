app.controller('TodoController',function TodoController ($scope,$routeParams,$filter,store){
        //the todo controller would be handling new additions to the
        //todo list and applying these to the DB via node and $resource

        'use strict';
        var self=this;

        store.get();

        var todos = $scope.todos = store.todos;

        $scope.newTodo = '';
    		$scope.editedTodo = null;

    		$scope.$watch('todos', function () {
    			$scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
    			$scope.completedCount = todos.length - $scope.remainingCount;
    			$scope.allChecked = !$scope.remainingCount;
    		}, true);

    		// Monitor the current route for changes and adjust the filter accordingly.
    		$scope.$on('$routeChangeSuccess', function () {
    			var status = $scope.status = $routeParams.status || '';
    			$scope.statusFilter = (status === 'active') ?
    				{ completed: false } : (status === 'completed') ?
    				{ completed: true } : {};
    		});

        self.newTask = ' ';

        $scope.addTodo = function()
        {
            var newTask={
                title:$scope.newTask.trim(),
                completed:false
            };

            store.insert(newTask)
            .then(function success(reponse) {
                $scope.todos.slice()
            })
            .finally(function () {
                self.saving = false;
            });

        }
    });
