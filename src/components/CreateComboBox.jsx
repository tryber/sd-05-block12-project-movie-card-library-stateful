import React from 'react';

class CreateComboBox extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.name}>
        {this.props.title}
        <select name={this.props.name} value={this.props.value} onChange={this.props.function}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default CreateComboBox;
