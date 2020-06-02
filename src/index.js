import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';

const App = () => {
  const todoData = [
    { label: 'Drink cofee', important: false, id: 1 },
    { label: 'Build React App', important: true, id: 2 },
    { label: 'Do shopping', important: false, id: 3 }
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