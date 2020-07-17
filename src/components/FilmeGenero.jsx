import React from 'react';
// import AddMovie from './AddMovie';

// const funcao = new AddMovie();
class FilmeGenero extends React.Component {
  render() {
    const { value, onChange, DH } = this.props;
    const opcao = [
      { key: 'Todos', value: '' },
      { key: 'Ação', value: 'action' },
      { key: 'Comédia', value: 'comedy' },
      { key: 'Suspense', value: 'thriller' },
    ];
    if (onChange.name === 'bound addMovie') { opcao.shift(); }
    // console.log(opcao);
    return (
      <label htmlFor={DH}>
        {DH}
        <select onChange={onChange} value={value}>
          {opcao.map((opt) => (<option key={opt.key} value={opt.value}>{opt.key}</option>))}
        </select>
      </label>
    );
  }
}

export default FilmeGenero;
