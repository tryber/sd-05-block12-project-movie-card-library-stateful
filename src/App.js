import React from 'react';
import './App.css';

import Data from './data';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

const genres = new Set(Data.map(({ genre }) => genre));

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar genres={genres} />
      <AddMovie />

    </div>
  );
}

export default App;
