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
    this.changeState = this.changeState.bind(this);
    this.changeBook = this.changeBook.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }


  changeState(newState) {
    this.setState({ searchText: newState.target.value });
  }

  changeBook() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  changeGenre(newState) {
    this.setState({ selectedGenre: newState.target.value });
  }

  favoriteMovies() {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.state;
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

  newMovie(filmeNovo) {
    this.setState({ movies: [...this.state.movies, filmeNovo] });
    /* const movies = this.state.movies;
    this.setState({movies: movies.push(filmeNovo),}); */
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>

        <SearchBar
          searchText={searchText} onSearchTextChange={this.changeState}
          bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={this.changeBook}
          selectedGenre={selectedGenre} onSelectedGenreChange={this.changeGenre}
        />

        <AddMovie onClick={this.newMovie} />

        <MovieList movies={this.favoriteMovies()} />

      </div>
    );
  }
}

export default MovieLibrary;
