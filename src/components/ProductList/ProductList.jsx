import React from 'react';

import ProductItem from '../ProductItem/ProductItem';

import cls from './ProductList.module.scss';

export const ProductList = ({ products }) => {

  return (
    <div className={cls.list}>
      {products.map(item => (
        <ProductItem
          key={item.id}
          product={item}
          className={cls.item}
        />
      ))}
    </div>
  );
};

export default ProductList;