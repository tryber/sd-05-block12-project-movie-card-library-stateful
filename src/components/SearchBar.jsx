import React from 'react';
import '../SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <label htmlFor="stext">
          Inclui o texto
          <input type="text" value={searchText} onChange={onSearchTextChange} id="stext" />
        </label>
        <label htmlFor="c">
          Mostrar somente favoritos
          <input type="checkbox" onChange={onBookmarkedChange} checked={bookmarkedOnly} id="c" />
        </label>
        <label htmlFor="sel">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange} id="sel">
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
