import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'all' };
  }
  setValueFilter(event) {
    this.setState({ filter: event.target.value === '' ? 'all' : event.target.value });
  }

  render() {
    return (
      <div className="movie-list">
        <form>
          <label htmlFor="incText">Inclui o texto
            <input onChange={this.setValueFilter} type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
