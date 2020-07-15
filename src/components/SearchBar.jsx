// implem git add ent Sea rchBar comp onent here

import React from 'react';

class Searchbar extends React.Component {

  render() {
    //      onSelectedGenreChange,
    //      selectedGenre,
    //      onBookmarkedChange,
    //      bookmarkedOnly

    const { searchText, onSearchTextChange } = this.props;

    return (
      <form type="submit">
        <label htmlFor="#filme">Inclui o texto:
          <div>
            <input
              id="#filme"
              type="text"
              name="filme"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </div>
        </label>
      </form>
    );
  }
}
export default Searchbar;
