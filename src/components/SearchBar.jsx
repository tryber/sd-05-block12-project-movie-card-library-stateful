/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { InputText, InputCheckBox, InputSelect } from './Inputs';

const genders = [
  { value: '', innerText: 'Todos' },
  { value: 'action', innerText: 'Ação' },
  { value: 'comedy', innerText: 'Comédia' },
  { value: 'thriller', innerText: 'Suspense' },
];

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
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
      <form className="search-bar">
        <InputText
          value={searchText}
          name={searchText}
          title="Inclui o texto"
          onChange={onSearchTextChange}
        />
        <InputCheckBox
          title="Mostrar somente favoritos"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        <InputSelect
          value={selectedGenre}
          name={searchText}
          title="Filtrar por gênero"
          onChange={onSelectedGenreChange}
          options={genders}
        />
      </form>
    );
  }
}

export default SearchBar;
