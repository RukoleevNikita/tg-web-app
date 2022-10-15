import React from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
import './Product.css';

export const Product = ({ product, onAdd }) => {
    // const {tg, queryId} = useTelegram();
    console.log(product)

    const onAddHandler = (e) => {
        e.target.textContent === 'удалить' ? e.target.textContent = 'добавить в корзину' :  e.target.textContent = 'удалить'
        onAdd(product);
    }

  return (
    <div className={'product'}>
        {/* <div className={'img'}/> */}
        <img src={product[0].url} alt="" className={'img'} />
        <div className={'title'}>{product[0].title}</div>
        <div className={'description'}>{product[0].description}</div>
        <div className={'price'}>
            <span>Стоимость: <b>{product[0].price}</b></span>
        </div>
        <Button className={'add-btn'} onClick={(e) => {onAddHandler(e)}}>
            добавить в корзину
        </Button>
    </div>
  )
}

