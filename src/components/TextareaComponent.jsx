import React from 'react';

class TextAreaComponent extends React.Component {
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
        <textarea
          type={type}
          value={value}
          onChange={callFunction}
          name={name}
        />
      </label>
    );
  }
}

export default TextAreaComponent;
