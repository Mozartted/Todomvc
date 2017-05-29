import React, { Component } from 'react';
import logo from './logo.svg';
import {Todo} from './components/Todo.jsx';
import './App.css';

export class App extends Component {

  getTodos(){
    return [
      {id:1,task:"This is the Task Name"},
      {id:2,task:"This is the Task Objectt"},
      {id:3,task:"This is the Task other info stuff" }
    ];
  };

  renderTodos(){
    var todo = this.getTodos();
    return todo.map(todo=>{
      <Todo task={todo.task} id={todo.id}></Todo>
    });
  }

  render() {
    const todo = this.getTodos();
    return (
      <section>
      <header className="header">
      	<h1>Todo MVC angular</h1>
      		<form id="todo-form">
      			<input id="new-todo" placeholder="What needs to be done?" autofocus="" />
      		</form>
      </header>
      <section id="main">
      	<input className="toggle-all" type="checkbox"/>
        <ul>
          <Todo todos = {todo} />
        </ul>
      </section>
      </section>

    );
  }
}

export default App;
