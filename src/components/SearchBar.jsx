// implement SearchBar component here
import React, { Component } from 'react';

const options = [
  ['Todos', ''],
  ['Ação', 'action'],
  ['Comédia', 'comedy'],
  ['Suspense', 'thriller'],
];
export default class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, onSelectedGenreChange, selectedGenre,
    } = this.props;
    return (
      <div>
        <form >
          <label htmlFor="filme">Inclui o texto:</label>
          <input id="filme" type="text" value={searchText} onChange={onSearchTextChange} />
          <label htmlFor="check">Mostrar somente favoritos</label>
          <input
            id="check"
            type="checkbox"
            checked={bookmarkedOnly} onChange={onBookmarkedChange}
          />
          <label htmlFor="tipo">Filtrar por gênero</label>
          <select
            id="tipo"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            {options.map((op) => (<option value={op[1]}>{op[0]}</option>))}
          </select>
        </form>
      </div>
    );
  }
}
