import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setFilterValue = this.setFilterValue.bind(this);
  }

  setFilterValue(event) {
    const eventoTarget = event.target;
    this.setState({
      [eventoTarget.id]: eventoTarget.value;
    });
  }

  render() {
    return(
      <div>
        <form>
          <label htmlFor="title">Título</label>
          <input type="text" id="title" value={this.state.title} onChange={this.setFilterValue} />
          <label htmlFor="subtitle">Subtítulo</label>
          <input type="text" id="subtitle" value={this.state.subtitle} onChange={this.setFilterValue} />
          <label htmlFor="image">Imagem</label>
          <input type="text" id="image" value={this.state.imagePath} onChange={this.setFilterValue} />
          <label htmlFor="synopsis">Sinopse</label>
          <textarea id="synopsis" value={this.state.storyline} onChange={this.setFilterValue} />
          <label htmlFor="number">Avaliação</label>
          <input type="number" id="number" value={this.state.rating} onChange={this.setFilterValue} />
          <label htmlFor="gender">Gênero</label>
          <select id="gender" value={this.state.genre} onChange={this.setFilterValue}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
