import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
    return (
      <ul>
          <li><TodoListItem label="Drink cofee" /></li>
          <li><TodoListItem
              label="Build React App"
              important    
              /></li>
        </ul>
    );
  };

  export default TodoList;