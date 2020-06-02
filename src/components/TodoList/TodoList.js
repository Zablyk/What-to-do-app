import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ( {todos}) => {
    const element = todos.map((item) => {
        return (
            <li key={item.id}>
               <TodoListItem 
                label={item.label}
                important={item.important}/>
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