import React, { Component } from 'react';

const toTitle = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const Input = (props) => {
  const {
    value,
    onChange,
  } = props;
  return (
    <label htmlFor="search-value">
          Inclui o texto
      <input
        type="text"
        value={value}
        onChange={onChange}
        key="search-value"
      />
    </label>
  );
};

const Bookmarked = (props) => {
  const { onChange, checked } = props;
  return (
    <label htmlFor="filter-bookmarked">
    Mostrar somente favoritos
      <input
        onChange={onChange}
        checked={checked}
        type="checkbox"
        key="filter-bookmarked"
      />
    </label>
  );
};

const MovieGenre = (props) => {
  const { onChange, selectedGenre, genresToFilter = [] } = props;
  const genres = [
    { text: 'Todos', value: '' },
    { text: 'Ação', value: 'action' },
    { text: 'Comédia', value: 'comedy' },
    { text: 'Suspense', value: 'thriller' },
  ];

  return (
    <label htmlFor="filter-genre">
      Filtrar por gênero
      <select
        key="filter-genre"
        onChange={onChange}
        value={selectedGenre}
      >
        {genres.map(({ text, value }, index) => (
          <option
            value={value}
            key={index.toString()}
          >
            {text}
          </option>
        ))}
      </select>
    </label>
  );
};

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      onSelectedGenreChange,
      selectedGenre,
      genres,
    } = this.props;
    return (
      <form>
        <Input value={searchText} onChange={onSearchTextChange} />
        <Bookmarked onChange={onBookmarkedChange} checked={bookmarkedOnly} />
        <MovieGenre
          onChange={onSelectedGenreChange}
          value={selectedGenre}
          genresToFilter={genres}
        />
      </form>
    );
  }
}

export default SearchBar;
