import React from 'react';

class InputElement extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.topic}
        <input 
        type="text"
        name={this.props.label}
        value={this.props.value}
        onChange={this.props.changeFunction}
        />
      </label>
    )
  }
}

exports default InputElement;
