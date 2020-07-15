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
        <label htmlFor="filter-bookmarked">
        Mostrar somente favoritos
          <input
            onChange={onBookmarkedChange}
            checked={bookmarkedOnly}
            type="checkbox"
            key="filter-bookmarked"
          />
        </label>

      </form>
    );
  }
}

export default SearchBar;
