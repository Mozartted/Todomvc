//controller to performseveral operations on Todo model...
//getting all tasks
//saving tasks
//getting completed tasks
//getting incompleted tasks
//deleting tasks
//editing tasks
var Todo=require('../models/Todo');

//every operation here can be reused by the route to perform operations
module.exports={

    Create:function(req,res){
        var todo=req.body.todo;
        var complete=false;

        var task=new Todo(
            {
                title:todo,
                completed:complete;

            }
        );

        task.save(function(err, result) {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            res.json(result);
        });
    },

    Update:function(req,res)
    {
      //updating a mongo database using node, first get the database values
      //from connections, then perfrom update operations
      var Todo=new Todo();
    }

    RetrieveSingle:function(req,res){
        //find a particular task
        var $query=req.body.search;

        Todo.find({todo:'$query'},'todo',function(err,existingTodo){
            if(existingTodo){
                return res.json(existingTodo);
            }
        });
        //finding the Users matchnig the search
    },

    RetrieveAll:function(req,res){
        //find a particular task
        Todo.find({},function(err,Todos){
            if(Todos){
                return res.json(Todos);
            }
        });
        //finding the Users matchnig the search
    },

    Delete:function(req,res){
        Todo.find({todo:req.body.todo},function(err,task){
            if(task){
                task.remove();

                return res.json({message:"task has been deleted"});
            }else{
                return res.json({message:"task does not exist"});
            }
        });
    },

}
