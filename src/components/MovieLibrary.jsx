import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filtroDeFilmes = this.filtroDeFilmes.bind(this);
    this.moviePusher = this.moviePusher.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      return this.setState({ bookmarkedOnly: false });
    };
    return this.setState({ bookmarkedOnly: true })
  };

  async onSelectedGenreChange(event) {
    const { value } = event.target;
    await this.setState({ selectedGenre: value });
  }

  moviePusher(obj) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, obj] })
  }

  filtroDeFilmes() {
    const { selectedGenre, bookmarkedOnly, searchText } = this.state;
    const { movies } = this.state;
    let filtrados = movies;
    if (selectedGenre !== '') {
      filtrados = filtrados.filter((item) => {
        return item.genre === selectedGenre;
      });
    }
    if (bookmarkedOnly === true) {
      filtrados = filtrados.filter((item) => {
        return item.bookmarked === true;
      });
    }
    if (searchText !== '') {
      filtrados = filtrados.map((item) => {
        if (item.title.includes(searchText) === true ||
        item.subtitle.includes(searchText) === true ||
        item.storyline.includes(searchText) === true) {
          return item;
        }
      })
    }
    if (filtrados) filtrados = filtrados.filter((item) => item !== undefined);
    return filtrados;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filtrados = this.filtroDeFilmes();
    return (
      <div>
        <SearchBar 
          searchText={searchText}
          onBookmarkedChange={this.onBookmarkedChange}
          bookmarkedOnly={bookmarkedOnly}
          onSearchTextChange={this.onSearchTextChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={filtrados} />
        <AddMovie onClick={this.moviePusher} />
      </div>
    );
  }
}

export default MovieLibrary;
