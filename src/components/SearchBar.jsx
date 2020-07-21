import React from 'react';

const space = '  ';
class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div className='class-list'>
        <form>
          <label htmlFor='incText'>Inclui o texto {space}
            <input type='text' value={searchText} onChange={onSearchTextChange} />
          </label><br />
       '</form>
      </div>
    );
  }
}
export default SearchBar;
