// implement SearchBar component here
import React from 'react';

class SearchBar extends Component {
  render() {
    const searchBar = () => (
      <SearchBar
        searchText={props.searchText}
        onSearchTextChange={props.onSearchTextChange}
        bookmarkedOnly={props.bookmarkedOnly}
        onBookmarkedChange={props.onBookmarkedChange}
        selectedGenre={props.selectedGenre}
        onSelectedGenreChange={props.onSelectedGenreChange}
        />,
    )
  }
  
  return (
    <form>
      <label htmlFor="texto">Inclui o texto: </label>
      <input id="texto" type="text" value={searchText} onChange={onSearchTextChange} />
      <label htmlFor="check">Mostrar somente favoritos</label>
      <input id="check" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
      <label htmlFor="selec">Filtrar por gênero</label>
      <select id="selec" value={selectedGenre} onChange={onSelectedGenreChange}>
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </form>
  );
}

export default SearchBar;