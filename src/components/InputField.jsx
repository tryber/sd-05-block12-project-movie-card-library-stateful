import React from 'react';

class InputField extends React.Component {
  render() {
    const { name, title, type, value, func } = this.props;
    return (
      <div>
        <label htmlFor={name}>
          {title}
        </label>
        <input
          name={name}
          type={type}
          value={value}
          onChange={func}
        />
      </div>
    );
  }
}

export default InputField;
