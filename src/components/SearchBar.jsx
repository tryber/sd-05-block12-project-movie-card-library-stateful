// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
const searchBar = () => (
  mount(
    <SearchBar
      searchText={props.searchText}
      onSearchTextChange={props.onSearchTextChange}
      bookmarkedOnly={props.bookmarkedOnly}
      onBookmarkedChange={props.onBookmarkedChange}
      selectedGenre={props.selectedGenre}
      onSelectedGenreChange={props.onSelectedGenreChange}
    />,
  )
  )}
  );
}

export default SearchBar;