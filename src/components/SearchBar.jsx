/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SelectOptions from './SelectOptions';

class SearchBar extends React.Component {
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
      <form>
        <label htmlFor="search">Inclui o texto:</label>
        <input id="search" type="text" onChange={onSearchTextChange} value={searchText} />
        <label htmlFor="favorites">Mostrar somente favoritos</label>
        <input
          id="favorites"
          type="checkbox"
          onChange={onBookmarkedChange}
          checked={bookmarkedOnly}
        />
        <label htmlFor="gender">Filtrar por gênero</label>
        <SelectOptions event={onSelectedGenreChange} value={selectedGenre} />
      </form>
    );
  }
}

export default SearchBar;
