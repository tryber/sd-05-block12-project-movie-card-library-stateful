import React from 'react';

class TextArea extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.visibletext}
        <textarea
          value={this.props.storyline}
          name={this.props.label}
          onChange={this.props.change}
        />
      </label>
    );
  }
}

export default TextArea;
