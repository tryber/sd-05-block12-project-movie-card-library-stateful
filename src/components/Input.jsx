import React from 'react';

class Input extends React.Component {
  render() {
    const { htmlFor, textLabel, typeInput, valueInput, onChange, idInput } = this.props;
    return (
      <div>
        <label htmlFor={htmlFor}>{textLabel}</label>
        <input type={typeInput} value={valueInput} onChange={onChange} id={idInput} />
      </div>
    );
  }
}

export default Input;
