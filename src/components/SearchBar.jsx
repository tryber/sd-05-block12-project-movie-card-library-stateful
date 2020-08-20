// implement SearchBar component here
import React from 'react';
import '../SearchBar.css';

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="stext">Pesquisa</label>
          <input type="text" value={searchText} id="stext" onChange={onSearchTextChange}/>
        </form>
      </div>
    );
  }
}
