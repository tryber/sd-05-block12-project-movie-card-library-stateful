import React from 'react';
import ImpTxt from './ImpTxt';
import NumImp from './ImpTxt';
import SelBx from './SelBx';
import TxtA from './ImpTxtA';

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
  addNovo = () => {
    const onClick = this.props.onClick;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };
  render() {
    const chaS = (i) => {
      const { nome, valor } = i.target;
      this.setState({ [nome]: nome === 'rating' ? Number(valor) : valor });
    };
    return (
      <form action="">
        <ImpTxt nome="title" txt="Título" val={this.state.title} mud={chaS} />
        <ImpTxt nome="subtitle" txt="Subtítulo" val={this.state.subtitle} mud={chaS} />
        <ImpTxt nome="imagePath" txt="Imagem" val={this.state.imagePath} mud={chaS} />
        <TxtA nome="storyline" txt="Sinopse" val={this.state.storyline} mud={chaS} />
        <NumImp nome="rating" txt="Avaliação" val={this.state.rating} mud={chaS} />
        <SelBx name="genre" val={this.state.genre} func={chaS} texto="Gênero" />
        <button onClick={this.addNovo} type="button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
