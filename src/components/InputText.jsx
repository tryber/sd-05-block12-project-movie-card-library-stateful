import React from 'react';

class InputText extends React.Component {
  render() {
    const { name, value, onChange = () => {}, inName } = this.props;
    return (
      <label htmlFor={name} >
        {inName}
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          id={name}
        />
      </label>
    );
  }
}

export default InputText;
