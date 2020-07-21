import React from 'react';
import data from './data';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={data} />
    </div>
  );
}

export default App;
