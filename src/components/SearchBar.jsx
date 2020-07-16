// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="label1">Inclui o texto: </label>
        <input type="text" onChange={this.props.onSearchTextChange} value={this.props.searchText} id="label1" />
        <label htmlFor="label2">Mostrar somente favoritos </label>
        <input type="checkbox" onChange={this.props.onBookmarkedChange} checked={this.props.bookmarkedOnly} id="label2" />
        <label htmlFor="label3">Filtrar por gênero </label>
        <select onChange={this.props.onSelectedGenreChange} value={this.props.selectedGenre} id="label3">
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
