import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
    return (
      <ul>
          <li><TodoListItem /></li>
          <li>Build amazing app</li>
          <li>Do shoping</li>
        </ul>
    );
  };

  export default TodoList;