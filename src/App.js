import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import Movies from './data';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* quando eu importo um
       componente eu a verdade
       estou importando seu endereço */}
      <Header />
      <SearchBar />
      <MovieList movies={Movies} />
    </div>
  );
}

export default App;
