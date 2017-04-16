
// var Task = sails.models.task;

module.exports = {
    create:function(values,done){
        Task.create(values).exec(function(err,records){
            if(err) return done(err);
            return done(null,records);
        });
    },

    delete:function(task, done){
        Task.findOne(task).exec(function(err,task){
            task.destroy().exec((err)=>{
                if(err){
                    return err;
                }
                return done(null,'success');
            });
        });
    },
    
    get:function(value = null, done){ 
        // get all or get something
        if(value === null){
            Task.find().exec((tasks)=>{
                return done(null,tasks);
            });
        }

        Task.findOne(value).exec((task)=>{
            return done(null,task);
        })
    }

}