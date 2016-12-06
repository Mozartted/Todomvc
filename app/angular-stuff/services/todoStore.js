app.factory('TodoStore',function($http,$injector){

        return $http.get('/api')
			.then(function () {
				return $injector.get('api');
			}, function () {
				return $injector.get('localStorage');
			});
    })
    //the api factory for updating the resource from server
    .factory('api',['$resource',function($resource){

        var store={
            todos: [],

			api: $resource('/api/todos/:id', null,
				{
					update: { method:'PUT' }
				}
			),

			clearCompleted: function () {
				var originalTodos = store.todos.slice(0);

				var incompleteTodos = store.todos.filter(function (todo) {
					return !todo.completed;
				});

				angular.copy(incompleteTodos, store.todos);

				return store.api.delete(function () {
					}, function error() {
						angular.copy(originalTodos, store.todos);
					});
			},

			delete: function (todo) {
				var originalTodos = store.todos.slice(0);

				store.todos.splice(store.todos.indexOf(todo), 1);
				return store.api.delete({ id: todo.id },
					function () {
					}, function error() {
						angular.copy(originalTodos, store.todos);
					});
			},

			get: function () {
				return store.api.query(function (resp) {
					angular.copy(resp, store.todos);
				});
                //copies the response to the store.todos tasks
			},

			insert: function (todo) {
				var originalTodos = store.todos.slice(0);

				return store.api.save(todo,
					function success(resp) {
						todo.id = resp.id;
						store.todos.push(todo);
					}, function error() {
						angular.copy(originalTodos, store.todos);
					})
					.$promise;
			},

			put: function (todo) {
				return store.api.update({ id: todo.id }, todo)
					.$promise;
			}
        }

        return store;


    }])
    .factory('localStorage',['$q',function(){

            return store;
    }])
