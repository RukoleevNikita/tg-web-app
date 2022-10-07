import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = (e) => {
        e.target.textContent === 'удалить из корзины' ? e.target.textContent = 'добавить в корзину' :  e.target.textContent = 'удалить из корзины'
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={(e) => {onAddHandler(e)}}>
                добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;