// implement SearchBar component here 
// Barra de pesquisa
import React from 'react';
import MovieCards from './MovieCard';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      selectedGenre: '',
    }
  }

  onSearchTextChange = () => { }
  bookmarkedOnly = () => { }
  onBookmarkedChange = () => { }
  onSelectedGenreChange = () => { }

  render() {
    const { searchText, selectedGenre } = this.state;
    return (
      <div>
        <label>Inclui o texto:</label>
          <input type="text" value={searchText} onChange={() => this.onSearchTextChange} className="optionsInput" />
        <label>
          <input type="checkbox" onChange={() => this.onBookmarkedChange} className="checked" checked={this.bookmarkedOnly} />
        </label>Mostrar somente favoritos
        <label>Filtrar por gênero</label>
        <select value={selectedGenre} onChange={() => this.onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </div>
    );
  }
}

export default SearchBar;