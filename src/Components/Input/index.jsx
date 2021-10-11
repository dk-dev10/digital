import React from 'react';

import classNames from 'classnames';

import style from './style.module.scss';

const Input = ({
  error,
  title = 'Title',
  placeholder = 'Placeholder',
  value,
  onChange,
}) => {
  return (
    <label
      htmlFor='text'
      className={classNames(style.input, error && style.inputError)}
    >
      <span>{title}</span>
      <input
        type='text'
        name='named'
        id='text'
        placeholder={placeholder}
        value={value.toLocaleString()}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
