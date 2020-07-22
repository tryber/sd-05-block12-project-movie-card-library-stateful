import React from 'react';

function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;

  return (
    <div>
      <form>
        <label htmlFor="include-text">Inclui o texto: </label>
        <input type="text" id="include-text" value={searchText} onChange={onSearchTextChange} />
        <label htmlFor="fave">Mostrar somente favoritos</label>
        <input type="checkbox" id="fave" value={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label htmlFor="filter-by-gender">Filtrar por gênero</label>
        <select id="filter-by-gender" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    </div>
  );
}

export default SearchBar;
