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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  onClick(newMovie) {
    this.setState({ movies: [...this.props.movies, newMovie] });
  }

  filterMovies() {
    const { selectedGenre, movies, searchText, bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      const bookmarkedMovies = movies.filter((movie) => movie.bookmarked);
      return bookmarkedMovies;
    }
    if (selectedGenre.length !== 0) {
      const filteredByGenre = movies.filter((movie) => movie.genre === selectedGenre);
      return filteredByGenre;
    }
    const searchMovieByText = movies.filter((movie) => (
      (movie.title.includes(searchText))
      || (movie.subtitle.includes(searchText))
      || (movie.storyline.includes(searchText))
    ));
    return searchMovieByText;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={this.state.onSearchTextChange}
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
