import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import CartItem from './CartItem';

export default function Cart() {

    const {cart, setCart, cartLength} = useContext(CartContext);

    return (
        <div className="d-flex flex-column justify-content-center align-content-center">
            <div id="cartHeader" className="py-2 px-4 welcomeCard rounded shadow mt-4 mx-4 flex-grow-1">
                <h2>Carrito de Compras</h2>
            </div>
            <div className="d-flex flex-column my-4 mx-5">
                {cart.map ((item) => 
                    <CartItem item={item}></CartItem>
                )}
            </div>
        </div>
    )
}
