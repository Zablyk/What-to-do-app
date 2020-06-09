import React from 'react';

import './search-panel.css';

const SearchPanel = (props) => {
  
  return (
    <form>
      <input type="text"
              className="form-control search-input"
              placeholder="type to search"
              onChange={props.onSearchChange}  
              />
    </form>
  );
};

export default SearchPanel;
