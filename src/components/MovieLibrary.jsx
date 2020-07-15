// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  
  onSearchTextChange = async (event) => {
    const { value } = event.target;
    await this.setState({ searchText: value });
    const movieList = this.props.movies;
    const searchTerm = this.state.searchText;
    const filteredList = movieList.filter((movie) => {
      if (movie.title.includes(searchTerm)) {
        return movie;
      }
      if (movie.subtitle.includes(searchTerm)) {
        return movie;
      }
      if (movie.storyline.includes(searchTerm)) {
        return movie;
      }
    });
    this.setState({ movies: filteredList });
  }

  onBookmarkedChange = async (event) => {
    const { checked } = event.target;
    await this.setState({ bookmarkedOnly: checked });
    const movieList = this.props.movies;
    const marked = this.state.bookmarkedOnly;
    if (marked === true) {
      const filteredList = movieList.filter((movie) => {
        if (movie.bookmarked === true) {
          return movie;
        }
      });
      this.setState({ movies: filteredList });
    } else {
      this.setState({ movies: this.props.movies });
    }
  }

  onSelectedGenreChange = async (event) => {
    const { value } = event.target;
    await this.setState({selectedGenre: value});
    const movieList = this.props.movies;
    const selectedGenre = this.state.selectedGenre;
    const filteredList = movieList.filter((movie) => {
      if (movie.genre === selectedGenre || selectedGenre === '') {
        return movie
      }
    });
    this.setState({ movies: filteredList });
  }

  onClick = () => {

  }

  render() {
    return(
      <div>
        <SearchBar
          searchText={this.state.searchText} 
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>

    )
  }
}


export default MovieLibrary;
