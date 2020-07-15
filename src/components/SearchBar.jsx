import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange
    }
      = this.props;
    return (
      <section>
        <form>
          <label for="searchText">
            Inclui o texto:
            <input
              id="searchText"
              type="text"
              value={searchText}
              onChange={onSearchTextChange}

            />
          </label>
          <label for="checkbox">
            Mostrar somente favoritos
            <input
              id="checkbox"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}

            />
          </label>
          <label for="genero">
            Filtrar por gênero
            <select
              id="genero"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default SearchBar;
