import React from 'react';

class InputText extends React.Component {
  render() {
    const { id, texto, value, e } = this.props;
    return (
      <label htmlFor={id}>
        {texto}
        <input type="text" id={id} name={id} value={value} onChange={e} />
      </label>
    );
  }
}

export default InputText;
