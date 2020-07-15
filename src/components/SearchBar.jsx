// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <form>
        <label htmlFor="text">
          Inclui o texto:
          <input type='text' value={this.props.searchText} onChange={this.props.onSearchTextChange} />
        </label>
        <label htmlFor="favorites">
          Mostrar somente favoritos
          <input type='checkbox' checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} />
        </label>
        <label htmlFor="style">
          Filtrar por gênero
          <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option value=''>Todos</option>
            <option value='action'>Ação</option>
            <option value='comedy'>Comédia</option>
            <option value='thriller'>Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
