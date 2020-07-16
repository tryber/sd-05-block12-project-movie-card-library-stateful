// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.props;
    return (
      <form>
        <label for="searchText">Inclui o texto:</label>
        <input id="searchText" type="text" value={searchText} />
        <input id="bookmarked" type="checkbox" checked={bookmarkedOnly} />
        <label for="bookmarked">Mostrar somente favoritos</label>
        <label>Filtrar por gênero:</label>
        <input type="text" value={selectedGenre} />
      </form>
    );
  }
}

export default SearchBar;
