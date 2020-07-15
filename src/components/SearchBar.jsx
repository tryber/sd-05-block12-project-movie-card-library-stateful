// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label>Inclui o texto:</label>
        <input type="text" value={searchText} />
      </form>
    )
  }
}

export default SearchBar;