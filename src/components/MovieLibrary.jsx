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
      movies: props.movies,

    };
    this.handleOnClickAddMovie = this.handleOnClickAddMovie.bind(this);
    this.handleChangeForSearchbar = this.handleChangeForSearchbar.bind(this);
  }

  handleOnClickAddMovie({
    subtitle,
    title,
    imagePath,
    storyline,
    rating,
    genre,
  }) {
    return this.setState((state) => ({
      movies: [
        ...state.movies,
        {
          title,
          subtitle,
          storyline,
          rating,
          imagePath,
          genre,
        },
      ],
    }));
  }

  handleChangeForSearchbar() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  renderMovieList() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filteredMovies = movies.filter(
      (movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText),
    );
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.genre === selectedGenre,
      );
    }
    return bookmarkedOnly
      ? filteredMovies.filter((movie) => movie.bookmarked)
      : filteredMovies;
  }


  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
          onBookmarkedChange={this.handleChangeForSearchbar}
        />
        <MovieList movies={this.renderMovieList()} />
        <AddMovie onClick={this.handleOnClickAddMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
