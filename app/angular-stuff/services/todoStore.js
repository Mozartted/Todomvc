angular.module('TodoMvc')
    .factory('TodoStore',['$resource',function($resource){
        $resource('api/task/:task',null,{
            save:{
                method:'POST'
            }
        })
    }]);
