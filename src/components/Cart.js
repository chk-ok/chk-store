import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import CartItem from './CartItem';
import Button from './Button';
import {Link} from 'react-router-dom';

export default function Cart() {

    const {cart, addToCart, cartLength} = useContext(CartContext);

    return (
            <div className="d-flex flex-column justify-content-center align-content-center">
                <div id="cartHeader" className="py-2 px-4 welcomeCard rounded shadow mt-4 mx-4 flex-grow-1">
                    <h2>Carrito de Compras</h2>
                </div>
                {cartLength() > 0 ?
                <div className="d-flex flex-column my-4 mx-5">
                    {cart.map ((item) => 
                        <CartItem item={item} key={item.id}></CartItem>
                    )}
                </div>
                :
                <div className="d-flex flex-column my-4 mx-5 align-items-center">
                    <p>EL CARRITO ESTA VACIO...</p>
                    <Link to="/">
                        <Button label="Elegi tu estilo"></Button>
                    </Link>
                </div>
                }
            </div>        
    )
}
