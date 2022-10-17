import React from 'react';

import Button from '../Button/Button';

import cls from './ProductParameters.module.scss';

export const ProductParameters = ({ product, onAdd }) => {

  const onAddHandler = (e) => {
    e.target.textContent === 'удалить' ? e.target.textContent = 'добавить в корзину' :  e.target.textContent = 'удалить';
    onAdd(product);
  };


  return (
    <div>
      <div className={cls.title}>{product[0].title}</div>
      <div className={cls.description}>{product[0].description}</div>
      <div className={cls.price}>
        <span>Стоимость: <b>{product[0].price}</b></span>
      </div>
      <Button className={'add_btn'} onClick={(e) => {onAddHandler(e);}}>
            добавить в корзину
      </Button>
    </div>
  );
};
