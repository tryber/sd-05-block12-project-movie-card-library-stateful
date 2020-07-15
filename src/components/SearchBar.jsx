// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="text">
            Inclui o texto:
            <input
            type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange} />
          </label>
          <label htmlFor="checkbox">
            Mostrar somente favoritos
            <input
            type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} />
          </label>
          <label htmlFor="genre">
            Filtrar por gênero
            <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
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
