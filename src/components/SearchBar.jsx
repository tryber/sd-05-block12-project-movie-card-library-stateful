import React from 'react';

class SearchBar extends React.Component {
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
      <form>
        <label htmlFor="stext">Inclui o texto</label>
        <input type="text" id="stext" value={searchText} onChange={onSearchTextChange} />
        <label htmlFor="fav">Mostrar somente favoritos</label>
        <input type="checkbox" id="fav" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <select id="filt" value={selectedGenre} onChange={onSelectedGenreChange}>
          <label htmlFor="filt">Filtrar por gênero</label>
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
