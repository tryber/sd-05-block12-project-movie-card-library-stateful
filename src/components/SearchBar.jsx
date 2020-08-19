// implement SearchBar component here
import React from 'react';
import '../SearchBar.css';

export default class SearchBar extends React.Component{
  render() {
    return (
      <div className="sbar">
        <form>
          <br />
          <input type="text" />
          <br />
          <input type="checkbox" />
          <label for="Filmes">Filmes</label>
          <input type="checkbox" />
          <label for="Séries">Séries</label>
        </form>
      </div>
    );
  }
}
