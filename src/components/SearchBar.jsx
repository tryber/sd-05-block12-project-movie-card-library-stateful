// implement SearchBar component here
import React from 'react'

class SearchBar extends React.Component {
  render(){
    const { searchText, 
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form action="">
        <label>Inclui o texto:</label>
        <input type="text" value={searchText}
        onChange={onSearchTextChange}
        />
      </form>
      
    );
  }
}

export default SearchBar;

/* 
    `SearchBar` deve receber como props:
  - `searchText`, uma string
  - `onSearchTextChange`, uma callback
  - `bookmarkedOnly`, um boolean
  - `onBookmarkedChange`, uma callback
  - `selectedGenre`, uma string
  - `onSelectedGenreChange`, uma callback
   */