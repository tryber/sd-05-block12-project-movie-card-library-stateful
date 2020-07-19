// implement AddMovie component here
import React from 'react';

const Input = () => {
  const { type, id, onChange, name, value } = this.props;
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subtitle: '', title: '', imagePath: '', storyline: '', rating: 0, genre: 'action' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: [value] });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="label1">Título</label>
        <Input name="title" type="text" value={title} onChange={this.title} id="label1" />
        <label htmlFor="label2">Subtítulo</label>
        <Input name="subtitle" type="text" value={subtitle} onChange={this.subtitle} id="label2" />
        <label htmlFor="label3">Imagem
        <Input name="imagePath" type="file" value={imagePath} onChange={this.imagePath} />
        </label>
        <label htmlFor="label4">Sinopse
        <Input name="sinopse" type="textarea" value={storyline} onChange={this.storyline} />
        </label>
        <label htmlFor="label5">Avaliação
        <Input name="rating" type="number" value={rating} onChange={this.rating} />
        </label>
        <label htmlFor="label6">Gênero</label>
        <select value={genre} onChange={this.genre} id="label6">
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

