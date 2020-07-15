// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form>
        <label>
          Inclui o Texto:
          <input type="text" value={searchText} onChange={onSearchTextChange}/>
        </label>
      </form>
    );
  }
}

export default SearchBar;
