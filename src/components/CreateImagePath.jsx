import React from 'react';

class CreateImagePath extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.name}>
        {this.props.title}
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.function}
        />
      </label>
    );
  }
}

export default CreateImagePath;
