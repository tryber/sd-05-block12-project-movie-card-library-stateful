import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

const buscar = (movies, searchText) => {
  const lista = movies.filter((movie) => {
    if (
      movie.title.includes(searchText) ||
      movie.subtitle.includes(searchText) ||
      movie.storyline.includes(searchText)
    ) {
      return movie;
    }
    return null;
  });
  return lista;
};

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.mudaTexto = this.mudaTexto.bind(this);
    this.mudaBox = this.mudaBox.bind(this);
    this.mudaGenre = this.mudaGenre.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filtrados = this.filtrados.bind(this);
  }

  onClick(addFilme) {
    this.setState({ movies: [...this.props.movies, addFilme] });
  }

  mudaTexto(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  mudaBox(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  mudaGenre(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  filtrados() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (searchText) {
      return buscar(movies, searchText);
    }
    if (bookmarkedOnly) {
      const filterList = movies.filter((movie) => movie.bookmarked === true);
      return filterList;
    }
    if (selectedGenre) {
      const filterList = movies.filter((movie) => movie.genre === selectedGenre);
      return filterList;
    }
    return movies;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          mudaTexto={this.mudaTexto}
          bookmarkedOnly={this.state.bookmarkedOnly}
          mudaBox={this.mudaBox}
          selectedGenre={this.state.selectedGenre}
          mudaGenre={this.mudaGenre}
        />
        <MovieList movies={this.filtrados()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
