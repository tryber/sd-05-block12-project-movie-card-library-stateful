import React from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
// Lista de filmes

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <SearchBar />
      </div>
    );
  }
}

export default MovieList;
