// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <form>
        <label htmlFor="search-value">
        Inclui o texto
          <input type="text" value={searchText} onChange={onSearchTextChange} 
          key="search-value" />
        </label>
        <label htmlFor="filter-bookmarked">
        Mostrar somente favoritos
          <input onChange={onBookmarkedChange} checked={bookmarkedOnly} type="checkbox"
            key="filter-bookmarked" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
