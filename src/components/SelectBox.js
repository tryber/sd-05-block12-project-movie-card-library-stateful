import React from 'react';

class SelectBox extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.topic}
        <select name={this.props.label} value={this.props.value} onChange={this.props.change}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectBox;
