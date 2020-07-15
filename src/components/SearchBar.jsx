// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
    const bookmarkedOnly = this.props.bookmarkedOnly;
    const onBookmarkedChange = this.props.onBookmarkedChange;
    const selectedGenre = this.props.selectedGenre;
    const onSelectedGenreChange = this.props.onSelectedGenreChange;
    return (
      <div className="formContainer">
        <form>
          <label htmlFor="texto">
            Inclui o texto:{" "}
            <input type="text" name="title" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="fav">
            Mostrar somente favoritos{" "}
            <input type="checkbox" id="fav" name="favoritos" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label htmlFor="genero">
            Filtrar por gênero:{" "}
            <select name="genero" value={selectedGenre} onChange={onSelectedGenreChange}>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
