import React from 'react';

class InputNumber extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.titulo}
        <input
          type="number"
          name={this.props.label}
          value={this.props.value}
          onChange={this.props.change} />
      </label>
    );
  }
}

export default InputNumber;
