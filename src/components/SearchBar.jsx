// implement SearchBar component here
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
        <label htmlFor="text-film">Inclui o texto</label>
        <input type="text" value={searchText} onChange={onSearchTextChange} />
        <label htmlFor="check">Mostrar somente favoritos</label>
        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        <label htmlFor="gender">Filtrar por gênero</label>
        <select
          name="gender"
          value="selectedGenre"
          onChange="onSelectedGenreChange"
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
