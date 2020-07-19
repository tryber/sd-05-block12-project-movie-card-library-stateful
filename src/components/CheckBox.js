import React from 'react';

class CheckBox extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.topic}
        <input
          type="checkbox"
          name={this.props.label}
          checked={this.props.checked}
          value={this.props.value}
          onChange={this.props.change}
        />
      </label>
    );
  }
}

export default CheckBox;
