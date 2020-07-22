// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { selectedGenre, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="busca-texto">
            Inclui o texto:
            <input type="text" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="favoritos">
            Mostrar somente favoritos
            <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label htmlFor="genero">
            Filtrar por gênero
            <select name="genero" value={selectedGenre} onChange={onSelectedGenreChange}>
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
