import React from 'react';

const Input = (props) => {
  const { type, key, onChange, name, value } = props;
  return (
    <input
      type={type}
      key={key}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

const Titulo = (props) => {
  const { value, onChange } = props;
  return (
    <label htmlFor="label1">Título
      <Input
        name="title"
        type="text"
        key="label1"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const Subtitulo = (props) => {
  const { value, onChange } = props;
  return (
    <label htmlFor="label2">Subtítulo
      <Input
        name="subtitle"
        type="text"
        key="label2"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const Imagem = (props) => {
  const { value, onChange } = props;
  return (
    <label htmlFor="label3">Imagem
      <Input
        name="imagePath"
        type="text"
        key="label3"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const Sinopse = (props) => {
  const { value, onChange } = props;
  return (
    <label htmlFor="label4">Sinopse
      <textarea
        name="storyline"
        type="textarea"
        key="label4"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const Avaliacao = (props) => {
  const { value, onChange } = props;
  return (
    <label htmlFor="label5">Avaliação
      <Input
        name="rating"
        type="number"
        key="label5"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const Genero = (props) => {
  const { value, onChange } = props;
  return (
    <label htmlFor="label6">Gênero
      <select
        value={value}
        onChange={onChange}
        key="label6"
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  );
};

const NewMovie = (props) => {
  const { resetState } = props;
  return (
    <div>
      <button type="button" onClick={() => resetState()}>Adicionar filme</button>
    </div>
  );
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subtitle: '', title: '', imagePath: '', storyline: '', rating: 0, genre: 'action' };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleChange2(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <Titulo value={title} onChange={this.handleChange} />
        <Subtitulo value={subtitle} onChange={this.handleChange} />
        <Imagem value={imagePath} onChange={this.handleChange} />
        <Sinopse value={storyline} onChange={this.handleChange} />
        <Avaliacao value={rating} onChange={this.handleChange2} />
        <Genero value={genre} onChange={this.handleChange} />
        <NewMovie resetState={this.resetState} />
      </form>
    );
  }
}

export default AddMovie;
