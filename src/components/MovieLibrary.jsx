// implement MovieLibrary component here

import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.filterMovieLibrary = this.filterMovieLibrary.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onBookmarkedChange() {
    this.setState((prevState) => ({ bookmarkedOnly: !prevState.bookmarkedOnly }));
  }

  filterMovieLibrary() {
    if (this.state.bookmarkedOnly) {
      return this.state.movies.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      return this.state.movies.filter(
        (movie) => movie.genre === this.state.selectedGenre,
      );
    }
    if (this.state.searchText !== '') {
      return this.state.movies.filter((movie) =>
         (
          movie.title.includes(this.state.searchText) ||
          movie.subtitle.includes(this.state.searchText) ||
          movie.storyline.includes(this.state.searchText)
        ),
      );
    }
    return this.state.movies;
  }

  addMovie(addedMovie) {
    this.setState((prevState) => ({ movies: [...prevState.movies, addedMovie] }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) =>
            this.setState({ searchText: event.target.value })
          }
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) =>
            this.setState({ selectedGenre: event.target.value })
          }
        />
        <MovieList movies={this.filterMovieLibrary()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
