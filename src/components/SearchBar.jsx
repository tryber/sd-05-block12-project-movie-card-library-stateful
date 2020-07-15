// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.searchText}
        {this.props.onSearchTextChange}
        {this.props.bookmarkedOnly}
        {this.props.onBookmarkedChange}
        {this.props.selectedGenre}
        {this.props.onSelectedGenreChange}
      </div>
    );
  }
}

export default SearchBar;
