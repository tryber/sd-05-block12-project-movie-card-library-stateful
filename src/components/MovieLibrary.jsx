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
      movies: this.props.movies,
    };
    this.handleChangeOnText = this.handleChangeOnText.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChangeOnText(event) {
    this.setState({ searchText: event.target.value });
  }

  // handleChange(event) {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: name === 'rating' ? parseFloat(value) : value });
  // }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChangeOnText}
          bookmarkedOnly={this.state.bookmarkedOnly}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
