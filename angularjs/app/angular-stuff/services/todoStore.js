app.factory('TodoStore',function($http,$injector){

  return $http.get('/api').then(
    function () {
      return $injector.get('api');
    },
    function () {
      return $injector.get('localStorage');
    }
  );
})
//the api factory for updating the resource from server
.factory('api',['$resource',function($resource)
{
  var store={
    
    todos: [],

    api: $resource(
      '/api/todo/:id',
       null,
       {
         update:{ method:'PUT'},
         getAll:{method:'GET', isArray:true}
       }
     ),

     clearCompleted: function ()
        {
				    var originalTodos = store.todos.slice(0);

				    var incompleteTodos = store.todos.filter(function (todo)
            {
					    return !todo.completed;
            });

            //replacing the store.todo with the incompleteTodos
				    angular.copy(incompleteTodos, store.todos);
				      return store.api.delete(function (){}, function error()
                {
						      angular.copy(originalTodos, store.todos);
					      }
              );
			},

			delete: function (todo) {
				var originalTodos = store.todos.slice(0);

        // splicing to remove one element from the index
        // of the todo, which is the todo
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
    .factory('localStorage', function ($q) {
      'use strict';

      var STORAGE_ID = 'todos-angularjs';

      var store = {
        todos: [],

        _getFromLocalStorage: function () {
          return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        _saveToLocalStorage: function (todos) {
          localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
        },

        clearCompleted: function () {
          var deferred = $q.defer();

          var incompleteTodos = store.todos.filter(function (todo) {
            return !todo.completed;
          });

          angular.copy(incompleteTodos, store.todos);

          store._saveToLocalStorage(store.todos);
          deferred.resolve(store.todos);

          return deferred.promise;
        },

        delete: function (todo) {
          var deferred = $q.defer();

          store.todos.splice(store.todos.indexOf(todo), 1);

          store._saveToLocalStorage(store.todos);
          deferred.resolve(store.todos);

          return deferred.promise;
        },

        get: function () {
          var deferred = $q.defer();

          angular.copy(store._getFromLocalStorage(), store.todos);
          deferred.resolve(store.todos);

          return deferred.promise;
        },

        insert: function (todo) {
          var deferred = $q.defer();

          store.todos.push(todo);

          store._saveToLocalStorage(store.todos);
          deferred.resolve(store.todos);

          return deferred.promise;
        },

        put: function (todo, index) {
          var deferred = $q.defer();

          store.todos[index] = todo;

          store._saveToLocalStorage(store.todos);
          deferred.resolve(store.todos);

          return deferred.promise;
        }
      };

      return store;
    });
