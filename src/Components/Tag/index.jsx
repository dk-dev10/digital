import React from 'react';

import style from './style.module.scss';

const Tag = ({ children = 'Text' }) => {
  return (
    <label htmlFor={children} className={style.tag}>
      <input type='checkbox' name='tags' id={children} />
      <span>{children}</span>
    </label>
  );
};

export default Tag;
