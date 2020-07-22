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
      <form>
        <label htmlFor="textoTitulo">Inclui o texto: </label>
        <input name="textoTitulo" type="text" value={searchText} onChange={onSearchTextChange} />
        <label htmlFor="fav">Mostrar somente favoritos</label>
        <input type="checkbox" name="fav" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label htmlFor="generos">Filtrar por gênero</label>
        <select name="generos" value={selectedGenre} onChange={onSelectedGenreChange}>
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
