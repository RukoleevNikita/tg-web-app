import React from 'react';
import './App.css';
import { useTelegram } from '../src/hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from "react-router-dom";
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { Product } from './components/Product/Product';

function App() {
  const { tg } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, [tg]);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'https://jocular-babka-1414d8.netlify.app/product'} element={<Product />} />
        <Route path={'form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
