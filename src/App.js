import React from 'react';
import './App.css';

import Data from './data';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';

const genres = new Set(Data.map(({ genre }) => genre));

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={Data} />
      <AddMovie />

    </div>
  );
}

export default App;
