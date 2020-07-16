import React from 'react';

class InputText extends React.Component {
render() {
return (
<label htmlFor={this.props.label}>
{this.props.visibletext}
<input
type="text"
name={this.props.label}
value={this.props.value}
onChange={this.props.change}
/>
</label>
);
}
}

export default InputText; 