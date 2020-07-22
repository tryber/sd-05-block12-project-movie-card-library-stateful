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
      <form>
        <label htmlFor="searchText">Inclui o texto: </label>
        <input name="searchText" type="text" value={searchText} onChange={onSearchTextChange} />
        <label htmlFor="bookmarkedOnly">Mostrar somente favoritos</label>
        <input type="checkbox" name="bookmarkedOnly"
          checked={bookmarkedOnly} onChange={onBookmarkedChange}
        />
        <label htmlFor="generos">Filtrar por gênero</label>
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
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
