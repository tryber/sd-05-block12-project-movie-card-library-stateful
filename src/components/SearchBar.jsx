/* eslint-disable linebreak-style */
import React, { Component } from 'react';

const input = (type, title, name, value, onChange) => {
  const id = `${title}-${Math.round(Math.random() * 9999)}`;
  if (type !== 'textarea') {
    return (
      <label htmlFor={id}>
        {title}
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={(ev) => { onChange(ev); }}
        />
      </label>
    );
  }
  return (
    <label htmlFor={id}>
      {title}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(ev) => { onChange(ev); }}
      />
    </label>
  );
};

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
        {input('text', 'Inclui o texto', 'search-text', searchText, onSearchTextChange)}
        <label htmlFor="show-fav">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            id="show-fav"
          />
        </label>
        <label htmlFor="gender">
          Filtrar por gênero
          <select id="gender" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
