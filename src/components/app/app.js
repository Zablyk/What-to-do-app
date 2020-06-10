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
      ],
      term: ''
    };

    createTodoItem (label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  };
  
  onSearchHandler = (term) => {
    this.setState({term: term});
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
   
    this.setState (({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };

  toggleProperty (arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
      //1. update old object
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      
      //2.construct new array
      const newArray = [
        ...arr.slice( 0, idx ),
        newItem,
        ...arr.slice( idx + 1 )
      ];
      return newArray;
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };



  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onShowDoneItems = () => {
    this.setState(({todoData}) => {
      const doneItem = todoData
                        .filter((el) => el.done)  
      const newArray = doneItem;

      return {
       todoData: newArray
      };
    });
  };

  onShowActiveItems = () => {
    this.setState(({todoData}) => {
      const activeItem = todoData
                        .filter((el) => !el.done)  
      const newArray = activeItem;

      return {
       todoData: newArray
      };
    });
  };

  search (items, term) {
    if ( term.length === 0 ) {
      return items;
    }

    return items.filter((item) => {
      return item.label
           .toLowerCase()
           .indexOf(term.toLowerCase()) > -1;
    });
  };

  render() {
    const { todoData, term } = this.state;
    const visibleItem = this.search(todoData, term);
    const doneCount = todoData
                        .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;                    
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
            onSearchChange={this.onSearchHandler}/>
          <ItemStatusFilter
            showDoneItems = {this.onShowDoneItems}
            showActiveItems={this.onShowActiveItems} />
        </div>
        <TodoList
          todos={ visibleItem }
          onDeleted={ this.deleteItemHandler }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone } />

      <ItemAddForm addItem={ this.addItemHandler } />
      </div>
    );
    };
  };
