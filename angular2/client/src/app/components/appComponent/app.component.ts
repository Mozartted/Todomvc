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

  constructor(todoStore: TodoStoreService){
    this.todoStore=todoStore;
  }

  addTodo(){
    // this makes a request to add the todo to the list.
    this.todo=new Todo(this.newTodoText);
    this.todo.completed=false;
    //sending this todo via the service to update store.
    this.todoStore.add(this.todo);
  }

  editTodo(todo:Todo){
    todo.editing=true;
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
			return this.todoStore.delete(todo);
		}

		todo.title = editedTitle;
	}

  remove(todo: Todo){
    this.todoStore.delete(todo);
  }

  removeCompleted(){
    //removing all todo with completed set to True
    this.todoStore.removeCompleted();
  }


}
