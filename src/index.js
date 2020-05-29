import React from 'react';
import ReactDOM from 'react-dom';

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

const AppHeader = () => {
  return <h1>My to do List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search"/>;
};

const App = () => {

  const loginBox = <span>Please Login</span>

  return (
    <div>
      {loginBox}
      <span>{ (new Date()).toString()}</span>
      <AppHeader /> 
      <SearchPanel/>
      <TodoList/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));