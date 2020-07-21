import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    searchText: '',
    bookmarkedOnly: false,
    selectedGenre: '',
    movies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectGenreChange = this.onSelectGenreChange.bind(this);
    this.onBookMarkedChange = this.onBookMarkedChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  onSelectGenreChange(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  onBookMarkedChange(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  onClick(newMovie) {
    this.setState({ movies: [...this.props.movies, newMovie] });
  }

  movieFilter() {
    const { selectedGenre, searchText, movies, bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      const movieFav = movies.filter((mov) => mov.bookmarked)
      return movieFav;
    }

    if (selectedGenre.length !== 0) {
      const movieGenre = movies.filter((mov) => mov.genre === selectedGenre);
      return movieGenre;
    }

    const movieFilterText = movies.filter((mov) => (
      (mov.title.includes(searchText))
      || (mov.subtitle.includes(searchText))
      || (mov.storyline.includes(searchText))
    ));
    return movieFilterText;
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
        searchText={this.state.searchText}
        bookmarkedOnly={this.state.bookmarkedOnly}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.onSelectedGenreChange}
        onBookmarkedChange={this.onBookmarkedChange}
        onSearchTextChange={this.onSearchTextChange}
        />
        <MovieList movies={this.movieFilter()} />
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

export default MovieLibrary;
