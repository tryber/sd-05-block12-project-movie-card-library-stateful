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
    this.changeBookmark = this.changeBookmark.bind(this);
    this.changeSearchText = this.changeSearchText.bind(this);
    this.changeBookMarkedOnly = this.changeBookMarkedOnly.bind(this);
    this.changeSelectedGenre = this.changeSelectedGenre.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  changeSearchText(state) {
    this.setState({ searchText: state.target.value });
  }

  changeBookMarkedOnly() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  changeSelectedGenre(state) {
    this.setState({ selectedGenre: state.target.value });
  }

  changeBookmark() {
    this.setState({ bookmarkedOnly: !this.target.value });
  }

  changeMovies() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      return movies.filter((movie) => movie.title.indexOf(searchText) >= 0 ||
      movie.subtitle.indexOf(searchText) >= 0 ||
      movie.storyline.indexOf(searchText) >= 0);
    }
    return movies;
  }

  newMovie(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeSearchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeBookMarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeSelectedGenre}
        />
        <MovieList movies={this.changeMovies()} />
        <AddMovie onClick={this.newMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
