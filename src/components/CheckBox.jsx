import React from 'react';

class CheckBox extends React.Component {
  render() {
    const { name, title, value, handleChange, ids, types } = this.props;
    return (
      <div>
        <label htmlFor={name}>{title}</label>
        <select value={value} name={name} onChange={handleChange}>
          {ids.map((id, index) => <option key={id} value={id}>{types[index]}</option>)}
        </select>
      </div>
    );
  }
}

export default CheckBox;
