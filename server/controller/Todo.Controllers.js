//controller to performseveral operations on Todo model...
//getting all tasks
//saving tasks
//getting completed tasks
//getting incompleted tasks
//deleting tasks
//editing tasks
var User=require('../models/Todo');

//every operation here can be reused by the route to perform operations
module.exports={

    addTodo:function(req,res){
        var todo=req.body.todo;
        var complete=false;

        var user=new User(
            {
                title:todo,
                completed:complete;

            }
        );

        user.save(function(err, result) {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            res.json(result);
        });
    }

    findTodo:function(req,res){
        //find a particular task
        var $query=req.body.search;

        User.find({'todo':'$query'},'todo',)
        //finding the Users matchnig the search
    }







}
