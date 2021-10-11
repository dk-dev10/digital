import classNames from 'classnames';
import React from 'react';

import style from './style.module.scss';

const ButtonText = ({ children, mb, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(style.buttonText, mb && style.mb)}
    >
      {children}
    </button>
  );
};

export default ButtonText;
