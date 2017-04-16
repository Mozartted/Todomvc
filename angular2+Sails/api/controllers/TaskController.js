/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res){
        var Todo = (req.body);
        TaskService.create(Todo,function(err,tasks){
            if(err) return res.json(err)
            return res.json(tasks);
        });
    },

    retrieveAll:function(req,res){
        TaskService.get(function(todos){
            res.json(todos);
        });
    },

    update:function(res,req){
        var task_id = res.params.id;
        TaskService.get(task_id,function(todo){
            todo.update(res.body).exec(function(err,todo){
                return res.json({status:'success',message:'task updated'})
            });
        });
    },

    delete:function(res,req){
        var task_id = res.params.id;
        TaskService.delete(task_id,function(status){
            if(status === 'success'){
                return res.json({status:'success',message:'deleted task'})
            }
        });
    }
};

