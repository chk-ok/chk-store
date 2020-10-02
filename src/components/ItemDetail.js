import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import Button from './Button';
import {CartContext} from '../context/CartContext';

export default function ItemDetail({item}) {

    const [counter, setCounter] = useState(1);
    const {cart, setCart, cartLength} = useContext(CartContext);

    const agregarAlCarrito = () => {
        setCart (cart => [...cart, {prod: item, cant: counter}]);
    }
    const comprar = () => {
        setCart (cart => cart.concat({prod: item, cant: counter}));
    }
    const handleUpdate = (count) => {
        setCounter(count);
    }

    if (item) {
        return (
            <div className="d-flex flex-wrap">
                <div className="d-flex justify-content-center flex-grow-1 mb-5">
                    <img src={item.image} alt="" className="productImage"/>
                </div>
                <div className="d-flex flex-column col-md-5 align-items-center justify-content-center">
                    <h4>
                        {item.name}
                    </h4>
                    <h3 className="productPrice">
                        ${item.price}
                    </h3>
                    <div className="buyingActions my-5">
                        <ItemCount initial="1" min="1" max="10" onAdd={agregarAlCarrito} onUpdate={handleUpdate}/>
                        <div className="mt-5 shadow">
                            <Button label={`Comprar ${counter}`} action={comprar}/>
                        </div>
                    </div>
                </div>
    
            </div>
        )
    }

    return <></>
    
}
