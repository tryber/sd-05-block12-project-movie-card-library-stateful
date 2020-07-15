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
      <fieldset>
        <form>
          <label htmlFor="searchText">Inclui o texto:</label>
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </form>
      </fieldset>
    );
  }
}

export default SearchBar;


// Esse componente renderizará uma barra com filtros acima da listagem de cartões. Quais cartões serão mostrados no componente MovieList dependerá dos filtros escolhidos. SearchBar deve receber como props:

// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback


// Renderize um formulário dentro de SearchBar
// Dentro desse formulário haverá campos usados na filtragem de cartões.
