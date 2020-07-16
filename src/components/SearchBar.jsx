// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.props;
    return (
      <form>
        <label htmlFor="searchText">Inclui o texto:</label>
        <input id="searchText" type="text" value={searchText} />
        <input id="bookmarked" type="checkbox" checked={bookmarkedOnly} />
        <label htmlFor="bookmarked">Mostrar somente favoritos</label>
        <label htmlFor="genre">Filtrar por gênero:</label>
        <input id="genre" type="text" value={selectedGenre} />
      </form>
    );
  }
}

export default SearchBar;
