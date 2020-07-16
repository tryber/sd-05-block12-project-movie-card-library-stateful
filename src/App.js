import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie'
import MovieLibrary from './components/MovieLibrary';

import catalog from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={catalog} />
    </div>
  );
}

export default App;
