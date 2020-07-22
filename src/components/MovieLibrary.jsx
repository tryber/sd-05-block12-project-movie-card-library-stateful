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
    this.resetButton = this.resetButton.bind(this);
    this.TextChange = this.TextChange.bind(this);
    this.markedChanged = this.markedChanged.bind(this);
    this.GenreChange = this.GenreChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  TextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  markedChanged() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  GenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  resetButton(newMovie) {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  filter() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    console.log(movies);
    const filterByText = movies.filter((movie) =>
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText),
    );
    const filterByGenre = selectedGenre === '' ? filterByText : filterByText.filter((movie) =>
      movie.genre === selectedGenre,
    );
    const filterByCheck = bookmarkedOnly === true ? filterByGenre.filter((book) =>
      book.bookmarked === bookmarkedOnly) : filterByGenre;
    return filterByCheck;
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <div>
        <div>
          <SearchBar
            onSearchTextChange={this.TextChange}
            searchText={searchText}
            onBookmarkedChange={this.markedChanged}
            bookmarkedOnly={bookmarkedOnly}
            onSelectedGenreChange={this.GenreChange}
            selectedGenre={selectedGenre}
          />
        </div>
        <div><MovieList movies={this.filter()} /></div>
        <div><AddMovie onClick={this.resetButton} /></div>
      </div>
    );
  }
}


export default MovieLibrary;
