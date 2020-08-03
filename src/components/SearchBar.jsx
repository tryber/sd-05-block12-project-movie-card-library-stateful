// implement SearchBar component here
import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="a">Inclui o texto</label>
        <input type="text" value={searchText} onChange={onSearchTextChange} />
        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        <label htmlFor="b">Mostrar somente favoritos</label>
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <label htmlFor="c">Filtrar por gênero</label>
      </form>
    );
  }
}
