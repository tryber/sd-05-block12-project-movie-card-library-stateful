// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, selectedGenre } = this.props
    return(
      <form>
        <label>Inclui o texto:</label>
        <input type='text' value={searchText} onChange={onSearchTextChange}/>
      </form>
    )
  }
}

export default SearchBar;