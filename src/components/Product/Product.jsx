import React from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import './Product.css';

export const Product = ({ product }) => {
    // const {tg, queryId} = useTelegram();
    console.log(product)

  return (
    <div className={'product'}>
        {/* <div className={'img'}/> */}
        <img src={product[0].url} alt="" className={'img'} />
        <div className={'title'}>{product[0].title}</div>
        <div className={'description'}>{product[0].description}</div>
        <div className={'price'}>
            <span>Стоимость: <b>{product[0].price}</b></span>
        </div>
        {/* <Button className={'add-btn'} onClick={(e) => {onAddHandler(e)}}>
            добавить в корзину
        </Button> */}
    </div>
  )
}

