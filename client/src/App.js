import { useState } from "react";

import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Banner from './components/Layout/Banner/Banner';

//importing Library files
import 'antd/dist/antd.css';
import './../node_modules/bootstrap/dist/js/bootstrap.js';

import Products from './components/Products/Products/Products'

/*
 *  Libraries used bootstrap, antd
 */
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <div className='poppins-font'>

        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Banner />
        <main>
          <Products/>
        </main>

      </div>
    </CartProvider>
  );
}

export default App;
