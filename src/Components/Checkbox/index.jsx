import React from 'react';
import classNames from 'classnames';

import style from './style.module.scss';

const Checkbox = ({ check }) => {
  return (
    <label htmlFor={check} className={classNames(style.input)}>
      <input type='checkbox' name='check' id={check} />
      <span></span>
    </label>
  );
};

export default Checkbox;
