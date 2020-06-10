import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];

  render() {
    const {filter, onFilterButtonChange} = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-otline-secondary'
      return (
        <button type="button"
            className={`btn ${clazz}`}
            key={name}
            onClick={() => onFilterButtonChange(name)}>
            {label}
            </button>
      );
    });

    return (
      <div className="btn-group">
       {buttons}
      </div>
    );
  };
};