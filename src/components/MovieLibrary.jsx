// implement MovieLibrary component here
import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import addMovie from '../components/AddMovie';
class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.changeSearchText = this.changeSearchText.bind(this);
    this.changeBookmarkeOnly = this.changeBookmarkeOnly.bind(this);
    this.changeSelectdGenre = this.changeSelectdGenre.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }
  changeSearchText(evt) {
    this.setState({ searchText: state.target.value });
  }
  changeBookmarkeOnly() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }
  changeSelectdGenre(state) {
    this.setState({ selectedGenre: state.target.value });
  }
  changeMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly == true) {
      return movies.filter((movie) => movie.bookmarkedOnly === true);
    }
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      return movies.filter(
        (movie) =>
          movie.title.indexOf(searchText) >= 0 ||
          movie.subtitle.indexOf(searchText) >= 0 ||
          movie.storyline.indexOf(searchText) >= 0,
      );
    }
    return movies;
  }
  newMOvie(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeSearchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeBookmarkeOnly}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeSelectdGenre}
        />
        <MovieList movies={this.changeMovies} />
        <addMovie onclick={this.newMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
