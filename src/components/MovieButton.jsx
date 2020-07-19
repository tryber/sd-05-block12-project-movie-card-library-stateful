import React from 'react';

class MovieButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" onClick={onClick}>Adicionar filme</button>
    );
  }
}

export default MovieButton;
