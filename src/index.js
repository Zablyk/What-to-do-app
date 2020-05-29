import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';

const App = () => {
  const todoData = [
    { label: 'Drink cofee', important: false },
    { label: 'Build React App', important: true },
    { label: 'Do shopping', important: false }
  ]
  
  return (
    <div>
      <AppHeader /> 
      <SearchPanel/>
      <TodoList todos={todoData}/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));