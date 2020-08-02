import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form>
          <input
            type="text" id="text" value={searchText} onChange={onSearchTextChange}
          /><label htmlFor="text">Inclui o texto:</label>
          <input
            type="checkbox" id="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}
          /><label htmlFor="checkbox">Mostrar somente favoritos</label>
          <select id="select" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option><option value="action">Ação</option>
            <option value="comedy">Comédia</option><option value="thriller">Suspense</option>
          </select><label htmlFor="select">Filtrar por gênero</label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
