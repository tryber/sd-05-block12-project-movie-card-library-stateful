// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
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
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) =>
            this.setState({ searchText: event.target.value })
          }
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() =>
            this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly })
          }
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) =>
            this.setState({ selectedGenre: event.target.value })
          }
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
