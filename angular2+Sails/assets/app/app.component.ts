import {Component} from '@angular/core';
import {TaskService} from './task.service';
import {Task} from './task';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular/Sails App</h1>'
})
export class AppComponent {

    todoText:String;
    taskStore: TaskService

    constructor(taskStore:TaskService){
        // create a list of tasks
        this.taskStore = taskStore;
    }

    addTask(){
        // adding the new task
        let task = new Task(this.todoText);
        this.taskStore.addTask(task);
    }

    removeTask(task : Task){
        // remove the given task
        this.taskStore.remove(task);
    }

    editTask(task: Task, editedTask: string){
        // edit the given task
        // check that editedTask equal actual values
        if(editedTask!==null || editedTask!==''){
            task.tasks=editedTask;
            this.taskStore.updateTask(task);
        }
    }

}
