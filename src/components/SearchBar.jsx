// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="search-value">
          Inclui o Texto:
          <input
            type="text"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
            key="search-value"
          />
        </label>
        <label htmlFor="filter-bookmarked">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
            key="filter-bookmarked"
          />
        </label>
        <label htmlFor="genre-list">
          Filtrar por gênero
          <select name="genre-list" value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
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
