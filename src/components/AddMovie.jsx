import React, { Component } from 'react';

const MovieTitle = (props) => {
  const { value, titleChange } = props;
  return (
    <label htmlFor="input-title">
Título
      <input
        name="title"
        type="text"
        key="input-title"
        value={value}
        onChange={titleChange}
      />
    </label>
  );
};

const MovieSubtitle = (props) => {
  const { value, subtitleChange } = props;
  return (
    <label htmlFor="input-subtitle">
Subtítulo
      <input
        name="subtitle"
        type="text"
        key="input-subtitle"
        value={value}
        onChange={subtitleChange}
      />
    </label>
  );
};

const ImagePath = ({ getPath, value }) => (
  <label htmlFor="input-image">
Imagem
    <input
      key="input-image"
      name="imagePath"
      type="text"
      value={value}
      onChange={getPath}
    />
  </label>
);

const Storyline = ({ value, onChange }) => (
  <label htmlFor="storyline-input">
Sinopse
    <textarea
      key="storyline-input"
      name="storyline"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

class AddMovie extends Component {
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
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    const stateChange = event.target.name;
    const { value } = event.target;
    this.setState({ [stateChange]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form>
        <MovieTitle
          value={title}
          titleChange={this.updateState}
        />
        <MovieSubtitle
          value={subtitle}
          subtitleChange={this.updateState}
        />
        <ImagePath
          getPath={this.updateState}
          value={imagePath}
        />
        <Storyline
          onChange={this.updateState}
          value={storyline}
        />
      </form>
    );
  }
}

export default AddMovie;
