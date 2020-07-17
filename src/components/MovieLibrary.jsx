// implement MovieLibrary component here
import React from 'react';
// import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filmes: { movies } };
    this.cadastraMovie = this.cadastraMovie.bind(this);
  }

  cadastraMovie(movie) {
    this.setState((state) => ({ filmes: [...state, movie] }));
  }

  render() {
   // const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie onClick={this.cadastraMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
// const { name, value } = event.target;
// onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
