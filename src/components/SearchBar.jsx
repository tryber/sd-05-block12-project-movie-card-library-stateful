// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <form>
          <label>Inclui o texto:</label>
          <input value={this.props.searchText} onChange={this.props.onSearchTextChange} />
          <label>Mostrar somente favoritos</label>
          <input type="checkbox" checked={this.props.bookmarkedOnly} />
          <label>Filtrar por gênero</label>
          <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
