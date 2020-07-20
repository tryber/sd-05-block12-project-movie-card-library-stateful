// implement MovieLibrary component here
import React from 'react';
// import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
// import LocalStorage from './LocalStorage';
// import movies from '../data';
// import movies from '../data';

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
    console.log(this.state.movies);
    this.cadastraMovie = this.cadastraMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filtraSaida = this.filtraSaida.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  cadastraMovie(filme) {
    const { movies } = this.props;
    this.setState({ movies: movies.push(filme) });
    // console.log(this.state.movies);
  }

  filtraSaida(lista) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly === true) {
      return lista.filter((filme) => filme.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre !== '') {
      return lista.filter((filme) => filme.genre === selectedGenre);
    }
    if (searchText !== '') {
      return lista.filter((filme) => filme.title.includes(searchText)
      || filme.subtitle.includes(searchText)
      || filme.storyline.includes(searchText));
    }
    // console.log(resultado);
    return lista;
  }

  // {
  //   title: 'Resident Evil',
  //   subtitle: 'Vendetta',
  //   storyline: 'Chris Redfield enlists the help of Leon S.
  // Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance,
  // from spreading a deadly virus in New York.',
  //   rating: 4.2,
  //   imagePath: 'images/Resident_Evil_Vendetta.jpg',
  //   bookmarked: true,
  //   genre: 'fantasy',
  // },
  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const { movies } = this.props;
    // console.log(this.state.filmes);
    // this.setState(LocalStorage(this.sate));
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filtraSaida(movies)} />
        <AddMovie onClick={this.cadastraMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
// const { name, value } = event.target;
// onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
