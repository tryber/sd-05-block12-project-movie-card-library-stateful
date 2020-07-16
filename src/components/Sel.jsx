import React from 'react';

class Sel extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.name}>
        {this.props.title}
        <select name={this.props.name} value={this.props.value} onChange={this.props.function} />
      </label>
    );
  }
}

export default Sel;
