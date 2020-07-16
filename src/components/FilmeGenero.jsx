import React from 'react';


class FilmeGenero extends React.Component {
  render() {
    const { value, onChange, DH } = this.props;
    const opcao = [
      { key: 'Todos', value: '' },
      { key: 'Ação', value: 'action' },
      { key: 'Comédia', value: 'comedy' },
      { key: 'Suspense', value: 'thriller' },
    ];
    return (
      <label htmlFor={DH}>
        {DH}
        :
        <select onChange={onChange} value={value}>
          {opcao.map((opt) => (<option key={opt.key} value={opt.value}>{opt.key}</option>))}
        </select>
      </label>
    );
  }
}

export default FilmeGenero;
