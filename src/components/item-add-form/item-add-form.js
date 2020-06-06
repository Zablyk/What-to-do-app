import React from 'react';

import './item-add-form.css';

const ItemAddForm = (props) => {
  return (
    <div className="item-add-form">  
        <input type="text"
            className="form-control item-add-input"
            placeholder="add new todo" />
    
        <button
            className="btn btn-outline-secondary"
            onClick={props.addItem}>
            Add item
        </button>
    </div>    
  );
};

export default ItemAddForm;
