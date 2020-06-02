import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ( {todos}) => {
    const element = todos.map((item) => {
      
      const { id, ...itemProps } = item;
      
      return (
            <li key={id}>
               <TodoListItem { ...itemProps }/>
            </li>
        );
    });
    return (
      <ul>
        {element}    
      </ul>
    );
  };

  export default TodoList;