import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    let TodoItems;
    if(this.props.todos){
      TodoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        {TodoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos;
