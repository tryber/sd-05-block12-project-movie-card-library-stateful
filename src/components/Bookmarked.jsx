import React from 'react';

class Bookmarked extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <div>
        <input
          id="bookmarked"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor="bookmarked">Mostrar somente favoritos</label>
      </div>
    );
  }
}

export default Bookmarked;
