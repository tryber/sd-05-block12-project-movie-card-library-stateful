/* eslint-disable jsx-a11y/label-has-associated-control */
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
        <label htmlFor="search">Inclui o texto:</label>
        <input id="search" type="text" onChange={onSearchTextChange} value={searchText} />
        <label htmlFor="favorites">Mostrar somente favoritos</label>
        <input
          type="checkbox"
          id="favorites"
          onChange={onBookmarkedChange}
          checked={bookmarkedOnly}
        />
        <label htmlFor="gender">Filtrar por gênero</label>
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
