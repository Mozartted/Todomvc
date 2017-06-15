import React, { Component } from 'react';
import {TodoComponent} from './components/Todo.jsx';
import './App.css';

export class App extends Component {
    constructor(props){
      // on loading set up props with all current todo
      super(props);
      this.state = {text:''};
      this.text = '';
      this.ENTER_KEY = 13;
      this.handleChange = this.handleChange.bind(this);
      this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
      this.state ={todos:this.props.models.todos};
      // this.renderTodos = this.renderTodos.bind(this);
    }

    handleChange(event) {
			this.setState({newTodo: event.target.value});
		}

	handleNewTodoKeyDown(event) {
			if (event.keyCode !== this.ENTER_KEY) {
				return;
			}

			event.preventDefault();

			var val = this.state.newTodo.trim();

			if (val) {
				this.props.models.addTodo(val);
        this.setState({todos:this.props.models.todos})
				this.setState({newTodo: ''});
			}
		}

  removeTodo(){
    // removing todo elemeent and addition
  }

  render() {
    return (
      <section>
      <header className="header">
      	<h1>Todo MVC React</h1>
      		<form id="todo-form">
      			<input id="new-todo" onChange={this.handleChange} onKeyDown={this.handleNewTodoKeyDown} placeholder="What needs to be done?"/>
      		</form>
      </header>
      <section id="main">
      	<input className="toggle-all" type="checkbox"/>
        <ul>
          <TodoComponent todos = {this.state.todos} />;
        </ul>
      </section>
      </section>

      // changes to models are supposed to trigger re-render
    );
  }
}

export default App;
