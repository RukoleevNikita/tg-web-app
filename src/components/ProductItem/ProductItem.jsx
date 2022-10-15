import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = (e) => {
        e.target.textContent === 'удалить' ? e.target.textContent = 'добавить в корзину' :  e.target.textContent = 'удалить'
        onAdd(product);
    }

    // const redirect () {

    // }

    return (
        <div className={'product ' + className}>
            {/* <div className={'img'}/> */}
            <img src={product.url} alt="" className={'img'} />
            <Link to={'https://jocular-babka-1414d8.netlify.app/product'} className={'title'}>{product.title}</Link>
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