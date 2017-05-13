import {Component} from '@angular/core';
import {TaskService} from './task.service';
import {Task} from './task';

// decorators go here
@Component({
    selector: 'my-app',
   templateUrl: './app.component.html'
})

export class AppComponent{
    todoText:String;
    taskStore:TaskService;
    constructor(taskStore:TaskService){
        // create a list of tasks
        this.taskStore = taskStore;
    }

    // adding tasks to list    
    addTask(){
        // adding the new task
        let task = new Task(this.todoText);
        this.taskStore.addTask(task);
    }

    // removing tasks returns observables
    removeTask(task : Task){
        // remove the given task
        this.taskStore.remove(task);
    }

    // edit tasks as they come
    editTask(task: Task, editedTask: string){
        // edit the given task
        // check that editedTask equal actual values
        if(editedTask!==null || editedTask!==''){
            task.tasks=editedTask;
            this.taskStore.updateTask(task);
        }
    }
}
