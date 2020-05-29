import React from 'react';

const TodoList = () => {
    const items = ['Learn JS and React.js', 'Build app']
    return (
      <ul>
          <li>{items[0]}</li>
          <li>{items[1]}</li>
          <li>Do shoping</li>
        </ul>
    );
  };

  export default TodoList;