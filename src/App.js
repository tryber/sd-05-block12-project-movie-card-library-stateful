import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import movies from './data';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;
