// Barra de pesquisa
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="label">Inclui o texto:
            <input type="text" value={searchText} onChange={this.onSearchTextChange}/>
          </label>
          <label htmlFor="label">
            <input type="checkbox" checked={this.bookmarkedOnly} onChange={this.onBookmarkedChange}/>
          </label>Mostrar somente favoritos
          <label htmlFor="label">Filtrar por gênero
            <select value={selectedGenre} onChange={() => this.onSelectedGenreChange}>
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
