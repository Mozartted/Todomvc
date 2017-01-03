//the route would use the express api to perform operations
//using the Todo.Controllers.js
var Todo  =  require('./controller/Todo.Controllers');


//create,retrieve,update, delete
module.exports=function(app){
  app.post('/api/todo',Todo.Create);//create
  app.delete('/api/todo/:id',Todo.Delete);//delete
  app.get('/api/todo',Todo.RetrieveAll);//retrieve
  app.post('/api/todo/:id',Todo.Update);//update
}
