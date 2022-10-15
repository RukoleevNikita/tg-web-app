import { useTelegram } from '../../hooks/useTelegram';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';
import React, {useState} from 'react';
import {useCallback, useEffect} from "react";
import { useRef } from 'react';



const getTotalPrice = (items = []) => { // суммирование цены
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
};


export const ProductList = ({ products }) => {
    const [addedItems, setAddedItems] = useState([]); // корзина
    const {tg, queryId} = useTelegram();

    // console.log(window.Telegram.WebApp)


    // if (addedItems.length !== 0) {
    //     const data = {
    //         products: addedItems,
    //         totalPrice: getTotalPrice(addedItems),
    //         queryId,
    //     }
    //     fetch('http://localhost:8000/web-data', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    // }

    const onSendData = React.useEffect(() => {
    // const onSendData = React.useCallback(() => { 
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://localhost:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        console.log(data)
    }, [addedItems]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);

        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData]);

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id); // найти товар в корзине
        let newItems = [];

        if(alreadyAdded) { // если товар есть удалить
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product]; // если его нет то в конец корзины добавляем этот товар
        }

        setAddedItems(newItems); // сохраняем состояние

        if(newItems.length === 0) { // если товары из корзины удалены то кнопку скрыть
            tg.MainButton.hide();
        } else { // иначе показать и подсчитать цену
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить: ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    )
}

export default ProductList;