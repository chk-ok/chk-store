import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar.js';
import Home from './components/Home.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Category from './components/Category';
import {CartProvider} from './context/CartContext';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home greeting="Hola! Bienvenida a tu nueva forma de vestir ;)"/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route path="/category/:categoryId">
              <Category/>
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    )
  }
}