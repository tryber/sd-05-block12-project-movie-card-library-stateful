import React, { Component } from 'react';

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

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <form>
        <Input value={searchText} onChange={onSearchTextChange} />
        <Bookmarked onChange={onBookmarkedChange} checked={bookmarkedOnly} />
      </form>
    );
  }
}

export default SearchBar;
