import React from 'react';

class TextAreaInput extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.topic}
        <textarea
          name={this.props.label}
          value={this.props.value}
          onChange={this.props.change}
        />
      </label>
    );
  }
}

export default TextAreaInput;
