import React, {Component} from 'react';


export class TodoComponent extends Component{
  // setting up propTypes
  constructor(props){
    // on loading set up props with all current todo
    super(props);
    // this.state = {text:''};
    // this.text = '';
    // this.ENTER_KEY = 13;
    // this.handleChange = this.handleChange.bind(this);
    // this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
    // this.state ={todos:this.props.models.todos};
    // // this.renderTodos = this.renderTodos.bind(this);
  }

  render(){
    return (
      <ul id="todo-list">
      {this.props.todos.map((todo)=>{
      return( <li>
          <div className="view">
            <input class="toggle" type="checkbox" />
            <label>{todo.title}</label>
            <button className="destroy" onClick={this.props.remove.bind(todo)}></button>
          </div>
          <input className="edit" />
        </li> )
      })}
      </ul>
    )
  }
}
