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
    movies: {movies}
    }
    this.changeHandler = this.changeHandler.bind(this);
    // this.updateState = this.updateState.bind(this);
  };
// precisa alterar todos os states menos movies
  changeHandler = event => {
    event.preventDefault();
    let { name, value } = event.target;
    this.updateState(name, value)
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
    }));
  }

  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
      <SearchBar searchText={this.state.searchText} onChange={this.changeHandler} />
      <MovieList />
      <AddMovie />
      </div>
    )
  }
};

export default MovieLibrary;
