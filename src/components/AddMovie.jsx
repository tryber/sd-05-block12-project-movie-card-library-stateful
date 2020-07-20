// implement AddMovie component here
import React from 'react';
import ImpTxt from './ImpTxt';

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
  }

  render() {
//    const { onClick } = this.props;

    const chaS = (i) => {
      const { nome, valor } = i.target;
      this.setState({ [nome]: nome === 'rating' ? Number(valor) : valor });
    };

    return (
      <form action="">
        <h1>testando</h1>
        <ImpTxt nome="title" txt="Título" id="tit" val={this.state.title} mud={chaS} />
        <ImpTxt nome="subtitle" txt="Subtítulo" id="subT" val={this.state.subtitle} mud={chaS} />

      </form>
    );
  }
}

export default AddMovie;
