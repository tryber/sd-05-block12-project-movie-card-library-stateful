// implem git add ent Sea rchBar comp onent here

import React from 'react';
import TextBar from './TextBar';
import CheckBoxBar from './CheckBoxBar';
import SelectBar from './SelectBar';


class searchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      onBookmarkedChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
     } = this.props;

    return (
      <form type="submit">
        <TextBar value={searchText} change={onSearchTextChange} />
        <CheckBoxBar check={bookmarkedOnly} change={onBookmarkedChange} />
        <SelectBar values={selectedGenre} changes={onSelectedGenreChange} />
      </form>
    );
  }
}
export default searchBar;
