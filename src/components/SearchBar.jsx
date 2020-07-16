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
        <label for="nome">Inclui o texto:</label>
        <input type="text" id="nome" onChange={onSearchTextChange} value={searchText} />
        <label for="favoritos">Mostrar somente favoritos</label>
        <input type="checkbox" id="favoritos" onChange={onBookmarkedChange} checked={bookmarkedOnly} />
        <label for="gender">Filtrar por gênero</label>
        <select id="gender" onChange={onSelectedGenreChange} value={selectedGenre}>
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
