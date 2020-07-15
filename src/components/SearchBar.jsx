// implem git add ent Sea rchBar comp onent here

import React from 'react';

class Searchbar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      onBookmarkedChange,
      bookmarkedOnly,
     } = this.props;

    return (
      <form type="submit">
        <label htmlFor="#filme">Inclui o texto:
          <div>
            <input
              id="#filme" type="text" name="filme" value={searchText}
              onChange={onSearchTextChange}
            />
          </div>
        </label>
        <div>
          <input
            id="#favoritos"type="checkbox"
            checked={bookmarkedOnly} onChange={onBookmarkedChange}
          />
          <label htmlFor="#favoritos">Mostrar somente favoritos</label>
        </div>
      </form>
    );
  }
}
export default Searchbar;
