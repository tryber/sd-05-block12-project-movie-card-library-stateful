import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie'
import movies from './data';

import Header from './components/Header';

const pushNewMovie = (state) => {
  movies.push(state);
}

function App() {

  return (
    <div className="App">
      <Header />
      <AddMovie onClick={pushNewMovie}/>
    </div>
  );
}

export default App;
