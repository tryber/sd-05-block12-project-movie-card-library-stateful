import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <div>
        <form>
          <label>
            Inclui o texto
            <input type='text' name='name' value={searchText} onChange={onSearchTextChange} />
          </label>
          <label>
            Mostrar somente favoritos
            <input type='checkbox' checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label>
            Filtrar por gênero
            <select name='genero' value={selectedGenre} onChange={onSelectedGenreChange}>
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
