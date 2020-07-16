import React from 'react';

class InputNumber extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.text}
        <input
          type="number"
          value={this.state.value}
          name={this.props.label}
          onChange={this.props.change}
        />
      </label>
    );
  }
}

export default InputNumber;
