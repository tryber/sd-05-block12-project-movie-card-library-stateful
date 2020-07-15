// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form>
        <label>
          Inclui o Texto:
          <input type="text" value={searchText} onChange={onSearchTextChange}/>
        </label>
        <label>
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}/>
        </label>
      </form>
    );
  }
}

export default SearchBar;
