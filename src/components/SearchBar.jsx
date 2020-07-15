/* eslint-disable linebreak-style */
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form className="search-bar">
        <label htmlFor="search-text">
          Inclui o texto
          <input
            type="text"
            id="search-text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label htmlFor="show-fav">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            id="show-fav"
          />
        </label>
        <label htmlFor="gender">
          Filtrar por gênero
          <select id="gender" value={selectedGenre} onChange={onSelectedGenreChange}>
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
