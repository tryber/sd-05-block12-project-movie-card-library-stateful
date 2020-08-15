import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

export default (props) => {
  const [texto, setTexto] = useState('');
  return (
    <div className="App">
      <Header />
      <SearchBar searchText="Digite aqui" func={onSearchTextChange} />
    </div>
  );
};

function onSearchTextChange() {
  return 'teste';
}
