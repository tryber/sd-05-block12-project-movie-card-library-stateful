import React from 'react';

class checkBoxBar extends React.Component {
  render() {
    const { check, change } = this.props;
    return (
      <div>
        <input
          id="#favoritos"
          type="checkbox"
          checked={check}
          onChange={change}
        />
        <label htmlFor="#favoritos">Mostrar somente favoritos</label>
      </div>
    );
  }
}

export default checkBoxBar;
