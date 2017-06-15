import React, { Component } from 'react';
import logo from './logo.svg';
import {TodoComponent} from './components/Todo.jsx';
import './App.css';
import app from './services/service.js';

export class App extends Component {
    constructor(props){
      // on loading set up props with all current todo
      super(props);
      this.state = {text:''};
      // setting up props.todos to todoService
    }

  addTodo(){
    // function to add todo to the list.

    var title = this.state.text;
    // create instance of todo
    app.TodoStore.addTodo(title);
  }

  removeTodo(){
    // removing todo elemeent and addition
  }

  render() {
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
          <TodoComponent todos = {this.props.models.todos} />
        </ul>
      </section>
      </section>

    );
  }
}


export default App;
