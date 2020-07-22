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
    this.onClick = this.onClick.bind(this);
  }

  handleCheckedBox() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  handleSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filterMovies(movie) {
    const { title, subtitle, storyline, genre, bookmarked } = movie;
    if (this.state.searchText !== '') {
      return (title.includes(this.state.searchText)
        || subtitle.includes(this.state.searchText)
        || storyline.includes(this.state.searchText)
      );
    }
    if (this.state.bookmarkedOnly) {
      return bookmarked === this.state.bookmarkedOnly;
    }
    if (this.state.selectedGenre === '') {
      return true;
    } return genre === this.state.selectedGenre;
  }

  onClick(state) {
    this.setState({ movies: [...this.props.movies, state] });
  }

  handleChangeOnText(event) {
    this.setState({ searchText: event.target.value });
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
          movies={this.state.movies.filter(this.filterMovies)}
        />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
