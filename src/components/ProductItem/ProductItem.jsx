import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import cls from './ProductItem.module.scss';

const ProductItem = ({product, className, onAdd}) => {

  return (
    <>
      <Link to={'https://jocular-babka-1414d8.netlify.app/product'} className={cls.product}>
        <div>
          <img src={product.url} alt="" className={cls.img} />
          {/* <div className={cls.title}>{product.title}</div> */}
          <div className={cls.title}>asfljkghaf</div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;