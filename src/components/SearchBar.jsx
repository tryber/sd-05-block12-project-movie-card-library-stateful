import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <label htmlFor="STB">
          Inclui o texto
          <input type="text" value={searchText} onChange={onSearchTextChange} id="STB" />
        </label>
        <label htmlFor="cb">
          Mostrar somente favoritos
          <input type="checkbox" onChange={onBookmarkedChange} checked={bookmarkedOnly} id="cb" />
        </label>
        <label htmlFor="FormSelect">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange} id="FormSelect" >
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
