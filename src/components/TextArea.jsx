import React from 'react';

class TextArea extends React.Component {
  render() {
    const { name, value, onChange = () => {}, inName } = this.props;
    return (
      <label htmlFor={name}>
        {inName}
        <textarea value={value} onChange={onChange} id={name} name={name} />
      </label>
    );
  }
}

export default TextArea;
