import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import data from './data';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={data} />
      </div>
    );
  }
}

export default App;
