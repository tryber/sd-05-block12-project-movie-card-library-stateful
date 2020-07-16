import React from 'react';
import InputElement from './InputElement';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNum = this.handleChangeNum.bind(this);
    this.NewMovie = this.NewMovie.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangeNum(e) {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  }

  NewMovie() {
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
  }

  render() {
    const { subtitle, title, imagePath, storyline, genre } = this.props;
    return (
      <form>
        <InputElement 
          label="title" titulo="Título" value={this.state.title} change={this.handleChange}
        />
      </form>
    );
  }
}
export default AddMovie;
