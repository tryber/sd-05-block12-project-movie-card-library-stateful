import React from 'react';

class TextArea extends React.Component {
  render() {
    const { name, value, onChange = () => {}, inputName } = this.props;
    return (
      <label htmlFor={name}>
        {inputName}
        <textarea value={value} onChange={onChange} id={name} />
      </label>
    )
  }
}

export default TextArea;