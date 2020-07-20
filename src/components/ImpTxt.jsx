import React from 'react';

class Imptxt extends React.Component {
  render() {
    const { nome, txt, id, val, mud } = this.props;
    return (
      <div>
        <label htmlFor={id}>{txt}
          <div>
            <input
              onChange={mud}
              key={id}
              type="text"
              id={id}
              name={nome}
              value={val}
              />
          </div>
        </label>
      </div>
      );
  }
}
export default Imptxt;
