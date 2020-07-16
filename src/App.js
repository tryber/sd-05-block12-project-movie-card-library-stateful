import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import Data from './data';
import MovieLibrary from './components/MovieLibrary';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/*
      <SearchBar />
      <AddMovie />
      */}
      <MovieLibrary movies={Data} />
    </div>
  );
}

export default App;
