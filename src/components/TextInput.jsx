import React from 'react';

class TextInput extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.titulo}
        <textarea
          name={this.props.label}
          value={this.props.value}
          onChange={this.props.change}
        />
      </label>
    );
  }
}

export default TextInput;
