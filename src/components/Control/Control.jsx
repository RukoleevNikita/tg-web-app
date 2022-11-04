import React from 'react';

import { Categories } from '../Categories/Categories';

import cls from './Control.module.scss';

export const Control = ({ event }) => {
  const [open, setOpen] = React.useState(false);

  const teest = () => {
    setOpen(!open);
    event(open);
  };

  return (
    <>
      <span className={cls.btn} onClick={() => {teest(!open);}}>
        Категории товаров
      </span>
      {open  && <Categories />}
    </>
  );
};
