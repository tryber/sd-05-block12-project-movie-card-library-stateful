// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="serachText">
            Inclui o texto:
            <input value={this.props.searchText} onChange={this.props.onSearchTextChange} name="serachText" />
          </label>
          <label htmlFor="checkbox">
            Mostrar somente favoritos
            <input type="checkbox" checked={this.props.bookmarkedOnly} name="checkbox" />
          </label>
          <label htmlFor="genre">
            Filtrar por gênero
            <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange} name="genre">
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
