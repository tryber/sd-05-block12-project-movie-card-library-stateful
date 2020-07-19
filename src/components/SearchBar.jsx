// implement SearchBar component here
import React from 'react';
import InputElement from './InputElement';
import SelectBox from './SelectBox';

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
          topic="Inclui o texto:" type="text"
          label="search" value={searchText} change={onSearchTextChange} />
        <InputElement
          topic="Mostrar somente favoritos" type="checkbox"
          label="favorites" checked={bookmarkedOnly} change={onBookmarkedChange} />
        <SelectBox
          topic="Filtrar por gênero" label="genre"
          value={selectedGenre} change={onSelectedGenreChange} />
      </form>
    );
  }
}

export default SearchBar;
