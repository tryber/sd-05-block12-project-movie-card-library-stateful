import React from 'react';
import './App.css';

import Data from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

const genres = new Set(Data.map(({ genre }) => genre));

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />

    </div>
  );
}

export default App;
