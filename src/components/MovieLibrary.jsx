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
    this.BookmarkChange = this.BookmarkChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
  }

  BookmarkChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  // funcao pra filtrar/mostrar os movies
  movieFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly) { return (movies.filter((film) => film.bookmarked === true)); }
    if (selectedGenre) {
      return (movies
        .filter((film) => film.genre === selectedGenre));
    }
    if (searchText) {
      return (movies
        .filter((film) => film.title.includes(searchText)
        || film.subtitle.includes(searchText)
        || film.storyline.includes(searchText)));
    }
    return this.state.movies;
  }
// função pra colocar movie onclick


  render() {
    // const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.BookmarkChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList movies={this.movieFilter()} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
