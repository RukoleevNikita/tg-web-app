import React from 'react';

import ProductItem from '../ProductItem/ProductItem';

import { Control } from '../Control/Control';

import { Scrollable } from '../Scrollable/Scrollable';

import cls from './ProductList.module.scss';

const categories = [
  {title: 'Все'},
  {title: 'Учителю'},
  {title: 'Мужские букеты'},
  {title: 'Букеты'},
  {title: 'Ореховые букеты'},
  {title: 'Клубника в шоколаде'},
  {title: 'Клубничные букеты'},
  {title: 'Букеты из шоколадных цветов'},
  {title: 'Подарки для детей'},
  {title: 'Шары и композиции'},
];

export const ProductList = ({ products }) => {

  const [show, setShow] = React.useState(false);
  
  const test = (event) => {
    setShow(!event);
  };

  return (
    <>
      <Control event={test}/>
      {/* <div className={cls.container}> */}
      {/* <Scrollable _class="items">
        {
          categories.map((category, i) => (
            <div key={i} className={cls.item}>
              {category.title}
            </div>
          ))
        }
      </Scrollable> */}
      {/* </div> */}
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