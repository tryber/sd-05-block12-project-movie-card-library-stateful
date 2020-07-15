import React from 'react';

class SearchBar extends React.Component {
  
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="text">
            Inclui o texto
            <input type="text" name="name" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="favorite">
            Mostrar somente favoritos
            <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label htmlFor="gender">
            Filtrar por gênero
            <select name="genero" value={selectedGenre} onChange={onSelectedGenreChange}>
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
