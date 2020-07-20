import React from 'react';

class NumImp extends React.Component {
  render() {
    const { nome, txt, id, val, mud } = this.props;
    return (
      <div>
        <label htmlFor={id}>{txt}
          <div>
            <input
              type="number"
              id={id}
              step={0.5}
              min="0"
              max="5"
              name={nome}
              value={val}
              onChange={mud}
              />
          </div>
        </label>
      </div>
    );
  }
}
export default NumImp;
