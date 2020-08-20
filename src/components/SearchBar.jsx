// implement SearchBar component here
import React from 'react';
import '../SearchBar.css';

export default class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="stext" />
          <input type="text" value={searchText} name="stext" />
        </form>
      </div>
    );
  }
}
