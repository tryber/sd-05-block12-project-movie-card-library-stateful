import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar'
import AddMovie from './components/AddMovie'
import MovieLibrary from './components/MovieLibrary'


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar searchText="" onSearchTextChange=""
      bookmarkedOnly=""
      onBookmarkedChange=""
      selectedGenre=""
      onSelectedGenreChange="" />
      <AddMovie />
      <MovieLibrary />
    </div>
  );
}

export default App;
