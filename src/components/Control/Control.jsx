import React from 'react';

import { Categories } from '../Categories/Categories';

import cls from './Control.module.scss';

export const Control = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <span className={cls.btn} onClick={() => {setOpen(!open);}}>
        Категории товаров
      </span>
      {open  && <Categories />}
    </>
  );
};
