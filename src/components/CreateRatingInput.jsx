import React from "react";

class CreateRatingInput extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.name}>
        {this.props.title}
        <input
          type='number'
          step={0.5}
          value={this.props.value}
          onChange={this.props.function}
        />
      </label>
    );
  }
}

export default CreateRatingInput;
