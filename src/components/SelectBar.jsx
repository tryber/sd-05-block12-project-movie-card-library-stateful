import React from 'react';

class selectBar extends React.Component {
  render() {
    const { values, changes } = this.props;
    const list = [
      { chave: 'Todos', valor: '' },
      { chave: 'Ação', valor: 'action' },
      { chave: 'Comédia', valor: 'comedy' },
      { chave: 'Suspense', valor: 'thriller' },
    ];

    return (
      <label htmlFor="#select">Filtrar por gênero
          <div>
            <select id="select" value={values} onChange={changes}>

              {list.map((genero) => (
                <option key={genero.chave} value={genero.valor}>
                  {genero.chave}
                </option>
                ),
              )}
            </select>
          </div>
      </label>
    );
  }
}
export default selectBar;
