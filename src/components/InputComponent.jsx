import React from 'react';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      labelName,
      name,
      value,
      type,
      callFunction,
      inputType,
    } = this.props;

    return (
      <label>
        {labelName}
        <input type={type} value={value} onChange={callFunction} name={name} />
      </label>
    );
  }
}

export default InputComponent;
