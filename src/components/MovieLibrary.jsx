import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.OnBookmarkedChange = this.OnBookmarkedChange.bind(this);
  }

  OnBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={searchText}
        onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
        bookmarkedOnly={bookmarkedOnly}
        onBookmarkedChange={this.OnBookmarkedChange}
        selectedGenre={selectedGenre}
        onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
      />
    );
  }
}

export default MovieLibrary;
