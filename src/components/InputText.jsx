import React from 'react';

class InputText extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.titulo}
        <textarea
          name={this.props.label}
          value={this.props.value}
          onChange={this.props.change}
        />
      </label>
    );
  }
}

export default InputText;
