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
    this.changeState = this.changeState.bind(this);
    this.changeBookmark = this.changeBookmark.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  changeState(event) {
    this.setState({ searchText: event.target.value });
  }

  changeBookmark() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  changeMoveis() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      return movies.filter((movie) => movie.title.indexOf(searchText) >= 0
      || movie.subtitle.indexOf(searchText) >= 0 || movie.storyline.indexOf(searchText) >= 0);
    }

    return movies;
  }

  changeSelect(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  newMovie(filmeNovo) {
    this.setState({ movies: [...this.state.movies, filmeNovo] });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.changeState}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.changeBookmark}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.changeSelect}
        />
        <MovieList movies={this.changeMoveis()} />
        <AddMovie onClick={this.newMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
