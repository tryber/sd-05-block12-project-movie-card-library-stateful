import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      onSearchTextChange,
      searchText,
      onBookmarkedChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="text">Inclui o texto:</label>
        <input id="text" type="text" onChange={onSearchTextChange} value={searchText} />
        <label htmlFor="box">Mostrar somente favoritos</label>
        <input id="box" type="checkbox" onChange={onBookmarkedChange} checked={bookmarkedOnly} />
        <label htmlFor="genre">Filtrar por gênero</label>
        <select id="genre" onChange={onSelectedGenreChange} value={selectedGenre}>
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
