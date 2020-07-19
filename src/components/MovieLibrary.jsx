// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', bookmarkedOnly: false, selectedGenre: '', movies: this.props.movies };
  }

// onSearchTextChange() {}

// onBookmarkedChange() {}

// onSelectedGenreChange() {}

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={this.onSearchTextChange}
          searchText={this.state.searchText}
          onBookmarkedChange={this.onBookmarkedChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onSelectedGenreChange={this.onSelectedGenreChange}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
