// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) =>
            this.setState({ searchText: event.target.value })
          }
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={() =>
            this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly })
          }
          selectedGenre={this.state.selectedGenre}
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
