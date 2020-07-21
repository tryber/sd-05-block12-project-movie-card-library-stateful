// implement SearchBar component here
import React from 'react';

const Input = (props) => {
  const { onSearchTextChange, searchText } = props;
  return (
    <label htmlFor="inputs" key="inputs">Inclui o texto
      <input type="text" onChange={onSearchTextChange} value={searchText} name="input1" />
    </label>
  );
};

const Input1 = (props) => {
  const { onBookmarkedChange, bookmarkedOnly } = props;
  return (
    <label htmlFor="inputs2" key="inputs2">Mostrar somente favoritos
      <input type="checkbox" onChange={onBookmarkedChange} checked={bookmarkedOnly} name="input2" />
    </label>
  );
};

const Input2 = (props) => {
  const { onSelectedGenreChange, selectedGenre } = props;
  return (
    <label htmlFor="inputs3" key="inputs3">Filtrar por gênero
      <select onChange={onSelectedGenreChange} value={selectedGenre} name="input3">
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  );
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', genre: 'action' };
  }
  render() {
    const {
      searchText,
      bookmarkedOnly,
      onSelectedGenreChange,
      onSearchTextChange,
      onBookmarkedChange,
    } = this.props;
    return (
      <form>
        <Input onSearchTextChange={onSearchTextChange} searchText={searchText} /><br />
        <Input1 onBookmarkedChange={onBookmarkedChange} bookmarkedOnly={bookmarkedOnly} /><br />
        <Input2 onSelectedGenreChange={onSelectedGenreChange} selectedGenre={this.state.genre} />
      </form>
    );
  }
}

export default SearchBar;
