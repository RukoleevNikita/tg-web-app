import React from 'react';

import ProductItem from '../ProductItem/ProductItem';

import { Control } from '../Control/Control';

import cls from './ProductList.module.scss';



export const ProductList = ({ products }) => {

  const [show, setShow] = React.useState(false);
  
  const test = (event) => {
    setShow(!event);
  };

  return (
    <>
      <Control event={test}/>
      {
        !show && <div className={cls.list}>
          {products.map(item => (
            <ProductItem
              key={item.id}
              product={item}
              className={cls.item}
            />
          ))}
        </div>
      }
    </>
  );
};

export default ProductList;