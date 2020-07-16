import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
      <AddMovie />
    </div>
  );
}

export default App;
