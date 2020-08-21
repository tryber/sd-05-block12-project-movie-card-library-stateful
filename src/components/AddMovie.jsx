import React from 'react';

export default class AddMovie extends React.Component {
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
    // const { onClick } = this.props;

    return (
      <form>
        <label htmlFor="tit" />
        <input type="text" id="tit" value={this.state.title} onChange={this.setState((e) => {})} />
      </form>
    );
  }
}
