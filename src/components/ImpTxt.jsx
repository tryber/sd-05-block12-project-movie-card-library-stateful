import React from 'react';

class Imptxt extends React.Component {
  render() {
    const { nome, txt, id, val, mud } = this.props;
    return (
      <label htmlFor={id}>{txt}
        <input
          id={id}
          name={nome}
          type="text"
          value={val}
          onChange={mud}
        />
      </label>
    );
  }
}
export default Imptxt;
