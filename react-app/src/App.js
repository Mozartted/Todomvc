import React, { Component } from 'react';
import logo from './logo.svg';
import {Todo} from './components/Todo.jsx';
import './App.css';
import {Todo, TodoStore} from './service.js';

export class App extends Component {

  getTodos(){
    return [
      {id:1,task:"This is the Task Name"},
      {id:2,task:"This is the Task Objectt"},
      {id:3,task:"This is the Task other info stuff" }
    ];
  };

  addTodo(){
    // function to add todo to the list.

    var todo = this.state.text;
    var 
  }

  removeTodo(){
    // removing todo elemeent and addition
  }

  render() {
    const todo = this.getTodos();
    return (
      <section>
      <header className="header">
      	<h1>Todo MVC angular</h1>
      		<form id="todo-form">
      			<input id="new-todo" onChange={this.addTodo} placeholder="What needs to be done?" value={this.state.text} autofocus="" />
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
