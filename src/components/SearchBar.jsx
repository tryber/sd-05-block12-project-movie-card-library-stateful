// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
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
      <form className="movie-card-search">
        <label htmlFor="searchText">
          Inclui o texto:
          <input
            type="text"
            name="searchtext"
            value="{searchText}"
            onChange="{onSearchTextChange}"
          />
        </label>
        <label htmlFor="bookMarker">
          Mostrar somente favoritos
          <input
            type="checklist"
            checked="{bookmarkedOnly}"
            onChange="{onBookmarkedChange}"
          />
        </label>
        <label htmlFor="selector">
          Filtrar por gênero
          <select
            name="genreFilter"
            id="genreFilter"
            value="{selectedGenre}"
            onChange="{onSelectedGenreChange}"
          ></select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
