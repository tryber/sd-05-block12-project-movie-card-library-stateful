import React from 'react';

class TxtA  extends React.Component {
  render() {
    const { nome, txt, val, mud } = this.props;
    return (
      <label htmlFor={nome}>{txt}
        <input
          id={nome}
          name={nome}
          type="textarea"
          value={val}
          onChange={mud}
        />
      </label>
    );
  }
}
export default TxtA ;
