import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import Button from './Button';
import {CartContext} from '../context/CartContext';
import './ItemDetail.css';

export default function ItemDetail({item}) {

    const [counter, setCounter] = useState(1);
    const {cart, addToCart, cartLength} = useContext(CartContext);

    const agregarAlCarrito = () => {
        addToCart (item, counter);
    }
    const comprar = () => {
        addToCart (item, counter);
    }
    const handleUpdate = (count) => {
        setCounter(count);
    }

    if (item) {
        return (
            <div className="productInfo ">
                <div className=" d-flex flex-wrap">
                    <div className="d-flex justify-content-center flex-grow-1 mb-5">
                        <img src={item.image} alt="" className="adaptVW productImage p-3"/>
                    </div>
                    <div className="adaptVW d-flex flex-column col-md-5 px-5 mx-2 align-items-center justify-content-center">
                        <h4>
                            {item.title}
                        </h4>
                        <h3 className="productPrice">
                            ${item.price}
                        </h3>
                        <div className="adaptVW buyingActions m-4">
                            <ItemCount initial="1" min="1" max={item.stock} onAdd={agregarAlCarrito} onUpdate={handleUpdate}/>
                            <div className="mt-5 shadow">
                                <Button label={`Comprar ${counter}`} action={comprar}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "p-5">
                    {item.description}
                </div>
            </div>
        )
    }

    return <></>
    
}
