// implement SearchBar component here
import React from 'react';
import InputElement from './InputElement';
import SelectBoxSB from './SelectBoxSB';
import CheckBox from './CheckBox';

class SearchBar extends React.Component {

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <InputElement
          topic="Inclui o texto:" label="search" value={searchText} change={onSearchTextChange}
        />
        <CheckBox
          topic="Mostrar somente favoritos" type="checkbox"
          label="favorites" checked={bookmarkedOnly} change={onBookmarkedChange}
        />
        <SelectBoxSB
          topic="Filtrar por gênero" label="genre"
          value={selectedGenre} change={onSelectedGenreChange}
        />
      </form>
    );
  }
}

export default SearchBar;
