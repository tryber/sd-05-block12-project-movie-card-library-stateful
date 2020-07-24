import React, { Component } from 'react';

const genres = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

const Input = (props) => {
  const {
    searchText,
    onSearchTextChange,
  } = props;
  return (
    <label className="label-input" htmlFor="search-value">
          Inclui o texto
      <input
        className="text-input"
        key="search-value"
        type="text"
        name="searchText"
        value={searchText}
        onChange={onSearchTextChange}
      />
    </label>
  );
};

const Bookmarked = (props) => {
  const { onChange, checked } = props;
  return (
    <label className="switch bookmarked-container" htmlFor="filter-bookmarked">
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
  const { onSelectedGenreChange, selectedGenre } = props;

  return (
    <label htmlFor="filter-genre">
      Filtrar por gênero
      <select
        key="filter-genre"
        onChange={onSelectedGenreChange}
        value={selectedGenre}
      >
        {genres.map(({ text, value }) => (
          <option
            value={value}
            key={value}
          >
            {text}
          </option>
        ))}
      </select>
    </label>
  );
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selGenre: 'action',
    };
  }

  render() {
    const {
      searchText, bookmarkedOnly, onBookmarkedChange,
      onSelectedGenreChange, onSearchTextChange,
    } = this.props;
    return (
      <form className="search-bar">
        <Input searchText={searchText} onSearchTextChange={onSearchTextChange} />
        <Bookmarked onChange={onBookmarkedChange} checked={bookmarkedOnly} />
        <MovieGenre
          onSelectedGenreChange={onSelectedGenreChange}
          selectedGenre={this.state.selGenre}
        />
      </form>
    );
  }
}

export default SearchBar;
