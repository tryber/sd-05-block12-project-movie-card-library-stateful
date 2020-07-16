import React, { Component } from 'react';

const Options = ({ value, onChange }) => (
  <div>
    <label htmlFor="genrefilter">
      Gênero
      <select
        value={value}
        onChange={onChange}
        name="genre-filter" id="genre-filter"
      >
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  </div>
);

const SearchTextFunc = ({ value, onChange }) => (
  <div>
    <label htmlFor="text">
      Inclui o texto:
      <input
        type="text"
        name="text"
        id="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);
// ANCHOR class

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <fieldset>
        <form>
          <SearchTextFunc value={searchText} onChange={onSearchTextChange} />
          <label htmlFor="checkbox">Mostrar somente favoritos</label>
          <input
            type="checkbox" name="checkbox"
            id="checkbox" checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />

          <label htmlFor="genre-filter">Filtrar por gênero</label>

          <Options value={selectedGenre} onChange={onSelectedGenreChange} />
        </form>
      </fieldset>
    );
  }
}

export default SearchBar;
