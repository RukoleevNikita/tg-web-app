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
      <div className={cls.description}>{product.description}</div>
      <div className={cls.price}>
        <span>Стоимость: <b>{product.price}</b></span>
      </div>
      <Button className={'add_btn'} onClick={(e) => {onAddHandler(e);}}>
            добавить в корзину
      </Button>
    </div>
  );
};
