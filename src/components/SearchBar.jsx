// implement SearchBar component here
import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedOnly,
      selectGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
        <div>

        </div>
    )
  }
}
