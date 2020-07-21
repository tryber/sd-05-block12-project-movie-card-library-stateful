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
    this.meuClick = this.meuClick.bind(this);
    this.myChanGen = this.myChanGen.bind(this);
    this.myChanBook = this.myChanBook.bind(this);
    this.myChanTxt = this.myChanTxt.bind(this);
  }

  meuClick(nMv) {
    this.setState({ movies: [...this.props.movies, nMv] });
  }

  myChanGen(evento) {
    console.log(evento.target.value)
    this.setState({ selectedGenre: evento.target.value });
  }

  myChanBook() {
    this.setState({ bookmarkedOnly: this.state.bookmarkedOnly });
  }

  myChanTxt(evento) {
    console.log(evento.target.value)
    this.setState({ searchText: evento.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
// filtro de texto
    const textfiltered =
      movies.filter((movie) =>
      movie.title.includes(searchText) ||
      movie.subtitle.includes(searchText) ||
      movie.storyline.includes(searchText),
    );
// filtor genero
    const genFil = selectedGenre === '' ? textfiltered : textfiltered.filter((genre) =>
      genre.genre === selectedGenre);
// filtro book
    const bookfil = bookmarkedOnly === true ? genFil.filter((book) =>
      book.bookmarked === bookmarkedOnly) : genFil;

    return (
      <section>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.myChanTxt}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.myChanBook}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.myChanGen}
        />

        <MovieList movies={bookfil} />

        <AddMovie onClick={this.meuClick} />
      </section>
    );
  }
}
export default MovieLibrary;
