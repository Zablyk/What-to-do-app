import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
  
  // onSearchChange () {
  //   console.log(event.target.value);
  // };


  return (
    <form>
      <input type="text"
              className="form-control search-input"
              placeholder="type to search"
              // onChange={this.onSearchChange}  
              />
    </form>
  );
};

export default SearchPanel;
