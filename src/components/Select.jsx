import React from 'react';

class Select extends React.Component {
  render() {
    const { id, texto, value, e } = this.props;
    return (
      <label htmlFor={id}>
        {texto}
        <select id={id} name={id} onChange={e} value={value}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;
