import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import ShoeInfo from "./pages/ShoeInfo";
import { shoes } from "./data";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { counter } from "@fortawesome/fontawesome-svg-core";

function App() {
  const [cart, setCart] = useState([]);

  function addItemTocart(shoe) {
    const dupeItem = cart.find((item) => item.id === shoe.id);
    setCart((oldCart) =>
      dupeItem
        ? [
          ...oldCart.map((item) => {
            return item.id === dupeItem.id
              ? {
                ...item,
                quantity: item.quantity + 1,
              }
              : item;
          }),
        ]
        : [...oldCart, { ...shoe, quantity: 1 }]
    );
  }


  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }


  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoes" element={<Shoes shoes={shoes} />} />
          <Route path="/shoes/:id" element={<ShoeInfo shoes={shoes} addItemTocart={addItemTocart} cart={cart} />} />
          <Route path="/cart" element={<Cart shoes={shoes} cart={cart} />} />
          <Route path="*" element={<div>404 Not Found!</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
