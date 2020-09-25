import React from 'react';
import ItemCount from './ItemCount';
import Button from './Button';

export default function ItemDetail({item}) {
    const agregarAlCarrito = (count) => {
        let message = 'Agregaste '.concat(count).concat(' ').concat(item.name).concat(' al carrito');
        window.alert (message);
    }
    const comprar = () => {
        let message = 'Vas a comprar '.concat(item.name).concat(' sin pasar por el carrito');
        window.alert (message);
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
                        <ItemCount initial="1" min="1" max="10" onAdd={agregarAlCarrito}/>
                        <div className="mt-5 shadow">
                            <Button label="Comprar" action={comprar}/>
                        </div>
                    </div>
                </div>
    
            </div>
        )
    }

    return <></>
    
}
