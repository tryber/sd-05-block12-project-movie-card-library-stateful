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
      onSelectedGenreChange,
    } = this.props;
    const ONC = onChange;
    return (
      <div>
        <form>
          <label htmlFor="includeText">Inclui o texto:</label>
          <input type="text"id="includeText"value={searchText} ONC={onSearchTextChange} />
          <input type="checkbox"id="favorite"checked={bookmarkedOnly}ONC={onBookmarkedChange} />
          <label htmlFor="favorites">Mostrar somente favoritos</label>
          <label htmlFor="filterGender">Filtrar por gênero</label>
          <select value={selectedGenre}id="filterGender"ONC={onSelectedGenreChange}>
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
