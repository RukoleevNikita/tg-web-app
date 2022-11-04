import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useTelegram } from '../../hooks/useTelegram';

import back from '../../assets/images/back.png';

import { ProductParameters } from '../ProductParameters/ProductParameters';

import { getTotalPrice } from '../../utils/utils';

import { Carousel } from '../Carousel/Carousel';

import cls from './Product.module.scss';


export const Product = ({ product }) => {
  console.log(product);
  const navigate = useNavigate();
  const [addedItems, setAddedItems] = React.useState([]);
  const {tg, queryId} = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, [tg]);

  const onSendData = React.useEffect(() => {
    // const onSendData = React.useCallback(() => { 
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };
    fetch('http://localhost:8000/web-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    // console.log(data);
  }, [addedItems]);

  React.useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);

    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id);
    let newItems = [];

    if(alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id);
    } else {
      newItems = [...addedItems, product]; 
    }

    setAddedItems(newItems); 

    if(newItems.length === 0) { 
      tg.MainButton.hide();
    } else { 
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить: ${getTotalPrice(newItems)}`
      });
    }
  };

  return (
    <div className={cls.product}>
      <div className={cls.product__navBlock}>
        <img src={back} alt="" className={cls.imgProduct} onClick={() => navigate(-1)}/>
      </div>
      <div className={cls.wrapper}>
        <Carousel>
          {product.imagesUrls.map((el, i) => (<img key={i} src={el} alt="" className={cls.img} /> ))}
        </Carousel>
         
        
      </div>
      {/* {
          product.imagesUrls.map((el, i) => (
            <img key={i} src={el} alt="" className={cls.img} />
          ))
        } */}
      <ProductParameters product={product} onAdd={onAdd} />
      
    </div>
  );
};

