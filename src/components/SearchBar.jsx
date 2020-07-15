import React, { Component } from 'react';

const genres = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

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
  const { onChange, selectedGenre } = props;

  return (
    <label htmlFor="filter-genre">
      Filtrar por gênero
      <select
        key="filter-genre"
        onChange={onChange}
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
    this.state = { value: 'action' };
  }

  onSearchTextChange = (event) => {
    this.setState({[value]: event.target.value});
  }

  onSelectedGenreChange = (event) => {
    this.setState({[value]: event.target.value})
  }
  // selectedGenre = () => this.state.value;

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
        <Input value={searchText} onChange={onSearchTextChange} />
        <Bookmarked onChange={onBookmarkedChange} checked={bookmarkedOnly} />
        <MovieGenre
          onChange={onSelectedGenreChange}
          selectedGenre={this.state.value}
        />
      </form>
    );
  }
}

export default SearchBar;
