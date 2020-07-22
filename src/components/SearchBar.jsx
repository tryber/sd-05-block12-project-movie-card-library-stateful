import React from 'react';

class SearchBar extends React.Component {
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
      <form action="">
        <label htmlFor="filme">Inclui o texto:</label>
        <input id="filme" type="text" value={searchText} onChange={onSearchTextChange} />
        <label htmlFor="check">Mostrar somente favoritos</label>
        <input id="check" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label htmlFor="tipo">Filtrar por gênero</label>
        <select id="tipo" value={selectedGenre} onChange={onSelectedGenreChange}>
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
