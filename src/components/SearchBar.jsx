import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        <label>Inclui o texto</label>
        <input type="text" value={searchText} onChange={onSearchTextChange}></input>

        <label>Mostrar somente os favoritos</label>
        <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}></input>

        <select value={selectedGenre} onChange={onSelectedGenreChange}>
          <label>Filtrar por gênero</label>
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
