import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <div className="search-bar">
        <form>
          <label htmlFor="search-text">Inclui o texto:
            <input name="text" type="text" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="checkbox">Mostrar somente favoritos
            <input name="checkbox" type="checkbox" checked={bookmarkedOnly}
             onChange={onBookmarkedChange} />
          </label>
          <label htmlFor="select">Filtrar por gênero
            <select value={selectedGenre} onChange={onSelectedGenreChange}>
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
