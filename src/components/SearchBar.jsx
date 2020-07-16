import React, { Component } from 'react';
import { InputText, InputCheckBox, InputSelect } from './Inputs';

const genders = [
  { value: '', innerText: 'Todos' },
  { value: 'action', innerText: 'Ação' },
  { value: 'comedy', innerText: 'Comédia' },
  { value: 'thriller', innerText: 'Suspense' },
];

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      searchText: st,
      onSearchTextChange: ost,
      bookmarkedOnly: bo,
      onBookmarkedChange: obmc,
      selectedGenre: sg,
      onSelectedGenreChange: osgc,
    } = this.props;

    return (
      <form className="search-bar">
        <InputText value={st} name={st} title="Inclui o texto" onChange={ost} />
        <InputCheckBox title="Mostrar somente favoritos" checked={bo} onChange={obmc} />
        <InputSelect
          value={sg}
          name={st}
          title="Filtrar por gênero"
          onChange={osgc}
          options={genders}
        />
      </form>
    );
  }
}

export default SearchBar;
