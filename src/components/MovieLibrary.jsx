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
    movies: props.movies
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

// funcao pra mostrar os movies

// função pra colocar movie

  render() {
    // const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
      <SearchBar
        searchText={this.state.searchText}
        // colocar function do onChange={this.changeHandler} 
        bookmarkedOnly={this.state.bookmarkedOnly}
        // function
        selectedGenre={this.state.selectedGenre}
        //function
      />
      <MovieList />
      <AddMovie />
      </div>
    )
  }
};

export default MovieLibrary;
