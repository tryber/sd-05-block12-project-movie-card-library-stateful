import React from 'react';

class TextArea extends React.Component {
  render() {
    const { id, texto, value, e } = this.props;
    return (
      <label htmlFor={id}>
        {texto}
        <textarea id={id} name={id} value={value} onChange={e} />
      </label>
    );
  }
}

export default TextArea;
