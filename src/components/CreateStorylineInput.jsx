import React from 'react';

class CreateStorylineInput extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.name}>
        {this.props.title}
        <textarea name={this.props.name} value={this.props.value} onChange={this.props.function} />
      </label>
    );
  }
}

export default CreateStorylineInput;
