// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {

  render() {
    const { onSearchTextChange, searchText, onSelectedGenreChange,
      selectedGenre, onBookmarkedChange, bookmarkedOnly} = this.props;
    return (
      <div>
        <form>
          <label htmlFor="inputTxt">Inclui o texto:
            <input name="inputTxt" type="text" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="favorito">Mostrar somente favoritos
            <input type="checkBox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label htmlFor='genre'>
            Filtrar por gênero
            <select value={selectedGenre} onChange={onSelectedGenreChange}>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    )
  };
}

export default SearchBar;
