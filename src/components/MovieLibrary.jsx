import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  addMovie(movie) {
    this.setState((state) => (
      { movies: [...state.movies, movie] }
    ));
  }

  filteredMovies() {
    const { selectedGenre, movies, searchText, bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre.length) {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    return movies.filter((movie) => (
      (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText))
    ));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(ev) => { this.setState({ searchText: ev.target.value }); }}
          onBookmarkedChange={(ev) => { this.setState({ bookmarkedOnly: ev.target.checked }); }}
          onSelectedGenreChange={(ev) => { this.setState({ selectedGenre: ev.target.value }); }}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
