import { Component } from '@angular/core';
import {TodoStoreService} from '../../service/TodoStore/todo-store.service';
import { Todo } from '../../service/todo';

@Component({
  selector: 'app-root',
  templateUrl: './components/appComponent/app.component.html',
  styleUrls: ['./components/appComponent/app.component.css']

})
export class AppComponent {
  todoStore: TodoStoreService;
  newTodoText:string;
  todo:Todo

  contructor(todoStore: TodoStoreService){
    this.todoStore=todoStore;
  }

  addTodo(){
    // this makes a request to add the todo to the list.
    this.todo=new Todo(this.newTodoText);
    //sending this todo via the service to update store.
    

  }

  stopEditing(todo: Todo, editedTitle: string) {
		todo.title = editedTitle;
		todo.editing = false;
	}

	cancelEditingTodo(todo: Todo) {
		todo.editing = false;
	}

	updateEditingTodo(todo: Todo, editedTitle: string) {
		editedTitle = editedTitle.trim();
		todo.editing = false;

		if (editedTitle.length === 0) {
			return this.todoStore.remove(todo);
		}

		todo.title = editedTitle;
	}

  removeCompleted(todo: Todo){

  }


}
