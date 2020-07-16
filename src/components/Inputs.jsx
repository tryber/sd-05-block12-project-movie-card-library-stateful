/* eslint-disable linebreak-style */
import React from 'react';

function InputText(props) {
  const { value, name, title, onChange = () => {} } = props;
  const id = `${title}-${Math.round(Math.random() * 9999)}`;
  return (
    <label htmlFor={id}>
      {title}
      <input id={id} type="text" name={name} value={value} onChange={onChange} />
    </label>
  );
}

function InputNumber(props) {
  const { value, name, title, onChange = () => {} } = props;
  const id = `${title}-${Math.round(Math.random() * 9999)}`;
  return (
    <label htmlFor={id}>
      {title}
      <input id={id} type="number" name={name} value={value} onChange={onChange} />
    </label>
  );
}

function InputTextArea(props) {
  const { value, name, title, onChange = () => {} } = props;
  const id = `${title}-${Math.round(Math.random() * 9999)}`;
  return (
    <label htmlFor={id}>
      {title}
      <textarea id={id} name={name} value={value} onChange={onChange} />
    </label>
  );
}

function InputCheckBox(props) {
  const { checked = false, name, title, onChange = () => {} } = props;
  const id = `${title}-${Math.round(Math.random() * 9999)}`;
  return (
    <label htmlFor={id}>
      {title}
      <input id={id} type="checkbox" name={name} checked={checked} onChange={onChange} />
    </label>
  );
}

function InputSelect(props) {
  const { value, name, title, options = [], onChange = () => {} } = props;
  const id = `${title}-${Math.round(Math.random() * 9999)}`;
  return (
    <label htmlFor={id}>
      {title}
      <select id={id} name={name} value={value} onChange={onChange}>
        {
          options.map((option) => (
            <option key={option.value} value={option.value}>{option.innerText}</option>
          ))
        }
      </select>
    </label>
  );
}

export {
  InputText,
  InputNumber,
  InputTextArea,
  InputCheckBox,
  InputSelect,
};
