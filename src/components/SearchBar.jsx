// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        <label htmlFor="search-value">
          Inclui o Texto:
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            key="search-value"
          />
        </label>
        <label htmlFor="filter-bookmarked">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            key="filter-bookmarked"
          />
        </label>
        <label htmlFor="genre-list">
          Filtrar por gênero
          <select name="genre-list" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
