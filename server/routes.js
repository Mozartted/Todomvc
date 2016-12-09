//the route would use the express api to perform operations
//using the Todo.Controllers.js
var Todo  =  require('./controller/Todo.Controllers');


//create,retrieve,update, delete
module.exports=function(app){
  app.post('/api/create',Todo.Create);//create
  app.delete('/api/task/:public_id',Todo.Delete);//delete
  app.get('/api/task',Todo.RetrieveAll);//retrieve
  app.post('/api/create');//update
  app.get('/api/create');
}
