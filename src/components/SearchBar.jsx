import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="search-bar">Inclui o texto:</label>
        <input
          id="search-bar" type="text"
          value={this.props.searchText} onChange={this.props.onSearchTextChange}
        />

        <label htmlFor="filter-favorites">Mostrar somente favoritos</label>
        <input
          id="filter-favorites" type="checkbox"
          checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
        />

        <label htmlFor="filter-by-genre">Filtrar por gênero</label>
        <select
          id="filter-by-genre"
          value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}
        >
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
