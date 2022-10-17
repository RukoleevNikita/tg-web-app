import React from 'react';

import cls from'./Button.module.scss';

export const Button = (props) => {
  return (
    <button {...props} className={`${cls.button} ${props.className}`} />
  );
};

export default Button;
