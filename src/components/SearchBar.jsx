// implement SearchBar component here
import React from 'react';
import CreateInput from './CreateInput';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <CreateInput
          name="title" title="Subtítulo: "
          value={this.props.searchText} function={this.props.onSearchTextChange}
        />
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
