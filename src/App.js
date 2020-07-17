import React from 'react';
import './App.css';
// import movies from './data';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
    </div>
  );
}

export default App;
