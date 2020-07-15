// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="texto">
          Inclui o texto:{' '}
          <input type="text" name="title" value={this.props.searchText} onChange={this.props.onSearchTextChange;} />
        </label>
        <label htmlFor="fav">
          Mostrar somente favoritos{' '}
          <input
            type="checkbox" id="fav" name="favoritos"
            checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
          />
        </label>
        <label htmlFor="genero">
          Filtrar por gênero:{' '}
          <select name="genero" value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
