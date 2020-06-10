import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  bottons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];
  
  render() {
    const buttons = this.bottons.map((name, label) => {
      return (
        <button type="button"
      className="btn btn-info">{label}</button>
      );
    });
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info">All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.props.showActiveItems}
                  >Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.props.showDoneItems}>Done</button>
      </div>
    );
  };
};