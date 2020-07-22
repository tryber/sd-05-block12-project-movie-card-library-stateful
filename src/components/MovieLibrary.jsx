// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.upTex = this.upTex.bind(this);
    this.upBook = this.upBook.bind(this);
    this.upGenre = this.upGenre.bind(this);
    this.fText = this.fText.bind(this);
    this.fBook = this.fBook.bind(this);
    this.fGenre = this.fGenre.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }
  upTex(event) {
    this.setState({ searchText: event.target.value });
  }
  upBook() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }
  upGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }
  fBook(e) {
    console.log(this.state.selectedGenre);
    return e.bookmarked === true;
  }
  fGenre(e) {
    return e.genre === this.state.selectedGenre;
  }
  fText(el) {
    const { searchText } = this.state;
    if (searchText !== '') {
      if (el.title.indexOf(searchText) >= 0
      || el.subtitle.indexOf(searchText) >= 0
      || el.storyline.indexOf(searchText) >= 0
      ) {
        return true;
      }
    }
    return false;
  }
  changeMovie() {
    let arrMovies = this.state.movies;
    if (this.state.bookmarkedOnly) {
      arrMovies = arrMovies.filter(this.fBook);
    }
    if (this.state.searchText) {
      arrMovies = arrMovies.filter(this.fText);
    }
    if (this.state.selectedGenre !== '') {
      arrMovies = arrMovies.filter(this.fGenre);
    }
    return arrMovies;
  }

  addMovies(movie) {
    /* const movies = this.state.movies;
    console.log(movie)
    await this.setState({ movies: movies.push(movie) }); */
    this.setState({ movies: [...this.state.movies, movie] });
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.upTex}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.upBook}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.upGenre}
        />
        <MovieList movies={this.changeMovie()} />
        <AddMovie onClick={this.addMovies} />
      </div>
    );
  }
}

export default MovieLibrary;
