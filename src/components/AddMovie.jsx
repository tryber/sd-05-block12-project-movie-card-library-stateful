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
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    const setFilterValue = this.setFilterValue;
    const title = this.state.title;
    const subtitle = this.state.subtitle;
    const imagePath = this.state.imagePath;
    const storyline = this.state.storyline;
    const rating = this.state.rating;
    const genre = this.state.genre;
    return (
      <div>
        <form>
          <label htmlFor="title">Título</label>
          <input type="text" name="title" id="title" value={title} onChange={setFilterValue} />
          <label htmlFor="subtitle">Subtítulo</label>
          <input type="text"name="subtitle"id="subtitle"value={subtitle}onChange={setFilterValue} />
          <label htmlFor="image">Imagem</label>
          <input type="text"name="imagePath" id="image"value={imagePath}onChange={setFilterValue} />
          <label htmlFor="synopsis">Sinopse</label>
          <textarea id="synopsis" name="storyline" value={storyline} onChange={setFilterValue} />
          <label htmlFor="number">Avaliação</label>
          <input type="number"name="rating"id="number"value={rating}onChange={setFilterValue} />
          <label htmlFor="gender">Gênero</label>
          <select id="gender" name="gender" value={genre} onChange={setFilterValue}>
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
