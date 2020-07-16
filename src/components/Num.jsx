import React from 'react';

class Num extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.name}>
        {this.props.title}
        <input
          type="number"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.function}
        />
      </label>
    );
  }
}

export default Num;
