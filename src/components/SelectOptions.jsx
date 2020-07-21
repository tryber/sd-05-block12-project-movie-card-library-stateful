import React from 'react';

class SelectOptions extends React.Component {
  render() {
    const { event, value } = this.props;
    return (
      <select id="gender" onChange={event} value={value}>
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    );
  }
}

export default SelectOptions;
