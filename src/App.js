import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar.js';
import Home from './components/Home.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {CartProvider} from './context/CartContext';
import img from './images/ropa_full.png';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  constructor (){
    super();
    this.state = {products : []};
  }

  componentDidMount(){
    const task = new Promise ((resolve, reject)=>{
        let productos = [
            {id: 1, name: 'Falda Estampada', price:450, image: img},
            {id: 2, name: 'Jean basico', price:900, image: img},
            {id: 3, name: 'Musculosa Algodon', price:300, image: img},
            {id: 4, name: 'Falda Estampada', price:450, image: img},
            {id: 5, name: 'Jean basico', price:900, image: img},
            {id: 6, name: 'Musculosa Algodon', price:300, image: img},
            {id: 7, name: 'Falda Estampada', price:450, image: img},
            {id: 8, name: 'Jean basico', price:900, image: img},
            {id: 9, name: 'Musculosa Algodon', price:300, image: img},
            {id: 10, name: 'Falda Estampada', price:450, image: img},
            {id: 11, name: 'Jean basico', price:900, image: img},
            {id: 12, name: 'Musculosa Algodon', price:300, image: img}
        ];
        setTimeout(()=> resolve(productos), 2000);
    });
    task.then(result => {
        this.setState({products: result});
    }, error => {
        console.log(error);
    }).catch(exception => {
        console.log(exception);
    })
  }

  render() {
    return (
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home greeting="Hola! Bienvenida a tu nueva forma de vestir ;)" products={this.state.products}/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/item/:id">
                <ItemDetailContainer products={this.state.products}/>
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    )
  }
}