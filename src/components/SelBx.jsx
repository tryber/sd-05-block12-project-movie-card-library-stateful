import React from 'react';

class SelBx extends React.Component {
  render() {
    const { name, val, func, texto}  = this.props;
    return (
      <label htmlFor={name}>{texto}
        <select name={name} value={val} onChange={func}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelBx;
