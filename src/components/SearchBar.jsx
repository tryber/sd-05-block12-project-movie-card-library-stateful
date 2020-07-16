import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
      <label>
        Inclui o texto: <br></br>
        <input className="searchText" type="text" />
      </label>
      </form>
    )
  }
}

export default SearchBar;
