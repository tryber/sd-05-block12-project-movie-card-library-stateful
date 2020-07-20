import React from 'react';

class NumImp extends React.Component {
  render() {
    const { nome, txt, val, mud } = this.props;
    return (
      <div>
        <label htmlFor={nome}>{txt}
          <div>
            <input
              type="number"
              id={nome}
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
