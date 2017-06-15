import React, {Component} from 'react';


export class TodoComponent extends Component{
  // setting up propTypes

  render(){
    return (
      <ul id="todo-list">
      {this.props.todos.map((todo)=>{
      return( <li>
          <div className="view">
            <input class="toggle" type="checkbox" />
            <label>{todo.title}</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" />
        </li> )
      })}
      </ul>

    )
  }
}
