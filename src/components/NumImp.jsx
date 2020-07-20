import React from 'react';

class NumImp extends React.Component {
  render() {
    const { nome, txt, id, val, mud, type } = this.props;
    return (
      <label htmlFor={id}>{txt}
        <input
          id={id}
          name={nome}
          type="number"
          value={val}
          onChange={mud}
        />
      </label>
    );
  }
}
export default NumImp;
