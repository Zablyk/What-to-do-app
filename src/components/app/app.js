import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import TodoList from '../todo-list/todo-list';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';


export default class App extends Component {

  maxId = 100;

  state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch')
      ]
    };

    createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };  

  deleteItemHandler = (id) => {
      this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const newArray = [
          ...todoData.slice( 0, idx ),
          ...todoData.slice( idx + 1 ),
        ];

        return {
          todoData: newArray
        };
    });
  };
  
  addItemHandler = (text) => {
    const newItem = this.createTodoItem(text);
    
    this.setState = (( {todoData} ) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };

  onToggleImportant = (id) => {
    console.log('Toggle Important', id);
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      //1. update old object
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};
      
      //2.construct new array
      const newArray = [
        ...todoData.slice( 0, idx ),
        newItem,
        ...todoData.slice( idx + 1 )
      ];
      return {
        todoData: newArray
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={ this.state.todoData }
          onDeleted={ this.deleteItemHandler }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone } />
      <ItemAddForm addItem={ this.addItemHandler } />
      </div>
    );
    };
  };
