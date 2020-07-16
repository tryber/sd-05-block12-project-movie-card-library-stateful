import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: 'My Text' };
  }

  onSearchTextChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="searchText">Inclui o texto:
          <input
            onChange={this.onSearchTextChange.bind}
            className="searchText"
            type="text"
            id="searchText"
            value={this.state.search}
            name="searchText"
          />
        </label>
        <label htmlFor="Favorites">Mostrar somente favoritos
        </label>
        <input
          type="checkbox"
          id="Favorites" check="checked"
        />
      </form>
    );
  }
}

export default SearchBar;
