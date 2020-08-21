// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
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
  resetState() {
    return this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="form4">Título</label>
          <input
            type="text"
            value={title}
            onChange={({ target: { value } }) =>
              this.setState({ title: value })
            }
          />
          <label htmlFor="form5">Subtítulo</label>
          <input
            type="text"
            value={subtitle}
            onChange={({ target: { value } }) =>
              this.setState({ subtitle: value })
            }
          />
          <label htmlFor="form6">Imagem</label>
          <input
            type="text"
            value={imagePath}
            onChange={({ target: { value } }) =>
              this.setState({ imagePath: value })
            }
          />
          <label htmlFor="form7">Sinopse</label>
          <textarea
            value={storyline}
            onChange={({ target: { value } }) =>
              this.setState({ storyline: value })
            }
          />
          <label htmlFor="form8">Avaliação</label>
          <input
            type="number"
            id="form8"
            value={rating}
            onChange={({ target: { value } }) =>
              this.setState({ rating: parseFloat(value) })
            }
          />
          <label htmlFor="form9">Gênero</label>
          <select
            value={genre}
            onChange={({ target: { value } }) =>
              this.setState({ genre: value })
            }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button
            onClick={() => {
              onClick(this.state);
              this.resetState();
            }}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}
