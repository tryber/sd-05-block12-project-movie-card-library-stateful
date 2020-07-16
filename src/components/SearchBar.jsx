// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { 
      searchText,
      selectedGenre,
      bookmarkedOnly,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="searchText">Inclui o texto:</label>
        <input id="searchText" type="text" value={searchText} onChange={onSearchTextChange} />
        <input id="bookmarked" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label htmlFor="bookmarked">Mostrar somente favoritos</label>
        <label htmlFor="genre">Filtrar por gênero:</label>
        <select id="genre" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
