import React from 'react';
import './App.css';

import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <MovieLibrary />
      <SearchBar />
    </div>
  );
}

export default App;
