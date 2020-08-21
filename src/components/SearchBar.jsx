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
          <label htmlFor="idform">Inclui o texto:</label>
          <input id="idform" type="text" value={searchText} onChange={onSearchTextChange} />
          <label htmlFor="idform1">Mostrar somente favoritos</label>
          <input id="idfrom1" type="checkbox"
            checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <label htmlFor="idfrom2">Filtrar por gênero</label>
          <select
            value={selectedGenre} onChange={onSelectedGenreChange}>{options.map((op) =>
              (<option value={op[1]}>{op[0]}</option>))}
          </select>
        </form>
      </div>
    );
  }
}
