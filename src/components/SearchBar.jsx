import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <form>
        <label htmlFor="search-value">
        Inclui o texto
          <input
            type="text"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
            key="search-value"
          />
        </label>

      </form>
    );
  }
}

export default SearchBar;
