import React, { Component } from 'react';

class InputNumber extends Component {
  render() {
    const { LT, v, oCFn } = this.props;
    return (
      <label htmlFor="text">
        {LT}
        <input type="number" value={v} onChange={oCFn} />
      </label>
    );
  }
}

export default InputNumber;
