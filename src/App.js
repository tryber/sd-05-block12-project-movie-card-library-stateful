import React from 'react';
import './App.css';

import Movies from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={Movies} />
    </div>
  );
}

export default App;
