import React from 'react';

class CheckBox extends React.Component {
  render() {
    const { name, title, value, handleChange, ids, types } = this.props;
    return (
      <div>
        <label htmlFor={name}>{title}</label>
        <select value={value} onClick={handleChange}>
          {ids.map((id, index) => <option value={id}>{types[index]}</option>)}
        </select>
      </div>
    )
  }
}

export default CheckBox;
