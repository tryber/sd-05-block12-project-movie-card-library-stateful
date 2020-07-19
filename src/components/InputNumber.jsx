import React from 'react';

class InputNumber extends React.Component {
  render() {
    const { id, texto, value, e } = this.props;
    return (
      <label htmlFor={id}>
        {texto}
        <input type="number" id={id} name={id} value={value} onChange={e} />
      </label>
    );
  }
}

export default InputNumber;
