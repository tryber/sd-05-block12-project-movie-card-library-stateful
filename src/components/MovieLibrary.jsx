import React from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
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
    this.changingStatus = this.changingStatus.bind(this);
  }

  changeBookMarkedOnly() {
    this.changingStatus(this.state);
  }
  changingStatus(state) {
    this.setState({
      bookmarkedOnly: state.bookmarkedOnly,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;
    return(
      <div >
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
        />
        <AddMovie />
        <MovieCard />
        <MovieList />
      </div>
    );
  }
}


export default MovieLibrary;
