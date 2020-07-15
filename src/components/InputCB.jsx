import React, { Component } from 'react';

class InputCB extends Component {
  render() {
    const { LT, c, oCFn } = this.props;
    return (
      <label htmlFor="select">
        {LT}
        <input type="checkbox" checked={c} onChange={oCFn} />
      </label>
    );
  }
}

export default InputCB;
