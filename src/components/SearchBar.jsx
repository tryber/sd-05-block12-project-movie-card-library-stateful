import React from 'react';

const space = '  ';
class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <div className="class-list">
        <form>
          <label htmlFor="incText">Inclui o texto {space}
            <input type="text" value={searchText} onChange={onSearchTextChange} />
          </label><br />
          <label htmlFor="favorite">Mostrar somente favoritos {space}
            <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label><br />
          <label htmlFor='genre'>Filtrar por gênero {space}
            <select name='genre' value={selectedGenre} onChange={onSelectedGenreChange}>
              <option value=''>Todos</option>
              <option value='action'>Ação</option>
              <option value='comedy'>Comédia</option>
              <option value='thriller'>Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
export default SearchBar;
