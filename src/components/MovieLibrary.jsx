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
      movies: this.props.movies,
    };
    this.handleChangeOnText = this.handleChangeOnText.bind(this);
    this.handleCheckedBox = this.handleCheckedBox.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChangeOnText(event) {
    this.setState({ searchText: event.target.value });
  }

  handleCheckedBox() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }
  
  handleSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value })
  }

  filterMovies(movie) {
    return (
      this.state.bookmarkedOnly ? movie.bookmarked === this.state.bookmarkedOnly : true &&
      this.state.selectedGenre === '' ? true : movie.genre === this.state.selectedGenre
      // this.state.searchText === '' ? true : movie.title.includes(this.state.searchText)
    );
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChangeOnText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleCheckedBox}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleSelectedGenre}
        />
        <MovieList
          movies={this.state.movies.filter(this.filterMovies)} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
