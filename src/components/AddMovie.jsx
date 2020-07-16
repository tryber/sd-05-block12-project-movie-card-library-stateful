import React, { Component } from 'react';

const MovieTitle = (props) => {
  const { title, titleChange } = props;
  return (
    <label htmlFor="input-title">
Título
      <input
        name="title"
        type="text"
        key="input-title"
        value={title}
        onChange={titleChange}
      />
    </label>
  );
};

const MovieSubtitle = (props) => {
  const { subtitle, subtitleChange } = props;
  return (
    <label htmlFor="input-subtitle">
Subtítulo
      <input
        name="subtitle"
        type="text"
        key="input-subtitle"
        value={subtitle}
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
    const { title, subtitle, imagePath } = this.state;
    return (
      <form>
        <MovieTitle
          title={title}
          titleChange={this.updateState}
        />
        <MovieSubtitle
          subtitle={subtitle}
          subtitleChange={this.updateState}
        />
        <ImagePath
          getPath={this.updateState}
          value={imagePath}
        />
      </form>
    );
  }
}

export default AddMovie;
