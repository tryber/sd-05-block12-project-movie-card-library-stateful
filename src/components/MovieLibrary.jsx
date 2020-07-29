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
    }
    return this.setState({ bookmarkedOnly: true });
  }

  async onSelectedGenreChange(event) {
    const { value } = event.target;
    await this.setState({ selectedGenre: value });
  }

  moviePusher(obj) {
    const { movies } = this.state;
    this.setState(() => ({ movies: [...movies, obj] }));
  }

  filtroDeFilmes() {
    const { selectedGenre, bookmarkedOnly, searchText } = this.state;
    const { movies } = this.state;
    const filtrados = movies;
    if (selectedGenre !== '') {
      return filtrados.filter((item) => item.genre === selectedGenre);
    }
    if (bookmarkedOnly === true) {
      return filtrados.filter((item) => item.bookmarked);
    }
    if (searchText !== '') {
      return filtrados.filter((item) => (
        (item.title.includes(searchText))
        || (item.subtitle.includes(searchText))
        || (item.storyline.includes(searchText))
      ));
    }
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
