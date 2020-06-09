import React, { Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: ''
  }
  
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>

        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="Add new todo"
               value={this.state.label}/>
    
        <button
            className="btn btn-outline-secondary">
            Add item
        </button>
      </form>    
    );
  };
};