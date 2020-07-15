// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">
            Inclui o texto:
            <input value={this.props.searchText} onChange={this.props.onSearchTextChange} />
          </label>
          <label>
            Mostrar somente favoritos
            <input type="checkbox" checked={this.props.bookmarkedOnly} />
          </label>
          <label>
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
