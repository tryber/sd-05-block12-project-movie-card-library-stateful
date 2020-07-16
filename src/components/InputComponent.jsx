import React from 'react';

class InputComponent extends React.Component {
  render() {
    const {
      labelName,
      name,
      value,
      type,
      callFunction,
    } = this.props;

    return (
      <label htmlFor={name}>
        {labelName}
        <input type={type} value={value} onChange={callFunction} name={name} />
      </label>
    );
  }
}

export default InputComponent;
