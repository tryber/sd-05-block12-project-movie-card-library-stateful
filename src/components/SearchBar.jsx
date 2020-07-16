import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <section>
        <div className="search">
          <p>Inclui o texto:</p><br />
          <input
            className="searchText" type="text"
            value={searchText} onChange={onSearchTextChange}
          />
        </div>
        <div className="search">
          <p>Mostrar somente favoritos</p>
          <input type="checkbox" checked="bookmarkedOnly" onChange="onBookmarkedChange" />
        </div>
      </section>
    );
  }
}

export default SearchBar;
