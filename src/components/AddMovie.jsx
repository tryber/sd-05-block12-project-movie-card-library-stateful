// implement AddMovie component here
import React from 'react';

const Input = (props) => {
  const { type, id, onChange, name, value } = props;
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

  renderInputs() {
    const { title, subtitle } = this.state;
    return (
      <div>
        <label htmlFor="label1">Título</label>
        <Input
          name="title"
          type="text"
          value={title}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor="label2">Subtítulo</label>
        <Input
          name="subtitle"
          type="text"
          value={subtitle}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }

  renderInputs2() {
    const { imagePath, storyline, rating } = this.state;
    return (
      <div>
        <label htmlFor="label3">Imagem</label>
        <Input
          name="imagePath"
          type="file"
          value={imagePath}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor="label4">Sinopse</label>
        <Input
          name="sinopse"
          type="textarea"
          value={storyline}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor="label5">Avaliação</label>
        <Input name="rating" type="number" value={rating} onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }

  render() {
    const { genre } = this.state;
    return (
      <form>
        {this.renderInputs()}
        {this.renderInputs2()}
        <label htmlFor="label6">Gênero</label>
        <select value={genre} onChange={(e) => this.handleChange(e)} id="label6">
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

