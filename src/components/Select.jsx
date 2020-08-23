import React from 'react';

export default class Select extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="sel">Filtrar por gênero</label>
        <select id="sel" value={this.props.value} onChange={this.props.change}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </div>
    );
  }
}
