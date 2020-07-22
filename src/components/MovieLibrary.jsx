import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  render() {
    return (
      <SearchBar 
      searchText={this.state.searchText}
      bookmarkedOnly={this.state.bookmarkedOnly}
      selectedGenre={this.stateselectedGenre} />
    );
  }
}