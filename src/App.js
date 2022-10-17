import React from 'react';

import {Route, Routes} from 'react-router-dom';

import {useCallback, useEffect} from 'react';

import { useRef } from 'react';

import { useTelegram } from '../src/hooks/useTelegram';

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { Product } from './components/Product/Product';

import cls from './App.module.scss';



const products = [
  {id: '1', title: 'Джинсы', price: 222, description: 'Синего цвета, прямые', url: 'http://localhost:8000/assets/products/1_1.jpg'},
  {id: '2', title: 'Куртка', price: 3333, description: 'Зеленого цвета, теплая', url: 'http://localhost:8000/assets/products/3_1.jpg'},
  {id: '3', title: 'Джинсы 2', price: 111, description: 'Синего цвета, прямые', url: 'http://localhost:8000/assets/products/4_1.jpg'},
  {id: '4', title: 'Куртка 8', price: 1111, description: 'Зеленого цвета, теплая', url: 'http://localhost:8000/assets/products/5_1.jpg'},
  {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые', url: 'http://localhost:8000/assets/products/6_1.jpg'},
  {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая', url: 'http://localhost:8000/assets/products/7_1.jpg'},
  {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые', url: 'http://localhost:8000/assets/products/8_1.jpg'},
  // {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая', url: 'http://localhost:8000/assets/products/9_1.jpg'},
];

const product = [
  {id: '1', title: 'Джинсы', price: 222, description: 'Синего цвета, прямые', urls: ['http://localhost:8000/assets/products/1_1.jpg', 'http://localhost:8000/assets/products/1_2.jpg', 'http://localhost:8000/assets/products/1_3.jpg', 'http://localhost:8000/assets/products/1_4.jpg']},
];

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList products={products}/>}/>
        <Route path={'https://jocular-babka-1414d8.netlify.app/product'} element={<Product product={product} />} />
        <Route path={'form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
