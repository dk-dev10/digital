import React from 'react';
import classNames from 'classnames';

import style from './style.module.scss';

const cn = classNames.bind(style);

const Button = ({ long, small, children = 'Кнопка', onClick }) => {
  return (
    <button
      className={cn(style.btn, small && style.btnSmall, long && style.btnLong)}
      disabled={false}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
