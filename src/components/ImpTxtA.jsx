import React from 'react';

class TxtA extends React.Component {
  render() {
    const { nome, txt, val, mud } = this.props;
    return (
      <div>
        <label htmlFor={nome}>{txt}
          <div>
            <textarea
              type="text"
              id={nome}
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
export default TxtA;
