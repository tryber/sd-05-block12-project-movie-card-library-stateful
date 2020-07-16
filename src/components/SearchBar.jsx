import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
          Inclui o texto:
        <input id="searchText" type="text" />
      </form>
    );
  }
}

export default SearchBar;
