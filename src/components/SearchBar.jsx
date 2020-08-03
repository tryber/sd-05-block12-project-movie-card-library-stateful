import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Inclui o texto:
            <br />
           <input type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange}/>
          </label>
        </form>
      </div>
    )
  }
}