import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.changeSearchText = this.changeText.bind(this);
    this.changeBookmarkedOnly = this.changeBook.bind(this);
    this.changeSelectGenre = this.changeGenre.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }
  changeText(event) {
    this.setState({ searchText: event.target.value });
  }
  changeBook() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }
  changeGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filteredMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      return movies.filter((movie) => movie.title.indexOf(searchText) >= 0 ||
        movie.subtitle.indexOf(searchText) >= 0 || movie.storyline.indexOf(searchText) >= 0);
    }

    return movies;
  }

  newMovie(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie]});
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.changeText}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.changeBook}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.changeGenre}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={this.addMovies} />
      </div>
    );
  }
}

export default MovieLibrary;
