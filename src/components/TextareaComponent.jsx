import React from 'react';

class TextAreaComponent extends React.Component {
  render() {
    const {
      labelName,
      name,
      value,
      type,
      callFunction,
    } = this.props;

    return (
      <label htmlFor={name}>{labelName}
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
