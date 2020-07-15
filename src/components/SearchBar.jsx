import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const genreOptions = [
      { text: 'Todos', value: '' },
      { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' },
      { text: 'Suspense', value: 'thriller' },
    ];
    const {
      onSearchTextChange,
      searchText,
      onSelectedGenreChange,
      selectedGenre,
      onBookmarkedChange,
      bookmarkedOnly,
    } = this.props;
    return (
      <form>
        <label htmlFor="search-text">
          Inclui o texto
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="search-checkbox">
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="search-select">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            {genreOptions.map((genre) => (
              <option key={Math.random() * 10} value={genre.value}>
                {genre.text}
              </option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
