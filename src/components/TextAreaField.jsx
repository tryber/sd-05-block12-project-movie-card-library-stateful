import React from 'react';

class TextArea extends React.Component {
  render() {
    const { name, title, value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor={name}>
          {title}
        </label>
        <textarea
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default TextArea;
