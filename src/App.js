import React from 'react';
import './App.css';

import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import './App.css';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
      <MovieLibrary moveis={Data} />
    </div>
  );
}

export default App;
