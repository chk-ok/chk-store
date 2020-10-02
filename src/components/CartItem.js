import React from 'react';

export default function CartItem({item}) {
        return (
            <div id={item.prod.id} className="d-flex flex-grow-1 cartItem rounded my-2">
                <img src={item.prod.image} alt="" className="rounded" style={{height: '100px'}}/>
                <div className="d-flex flex-column flex-grow-1 p-3 justify-content-center">
                    <span className="productName">{item.prod.name}</span>
                    <span className="productPrice">${item.prod.price}</span>
                </div>
                <div className="d-flex flex-column p-3 justify-content-center">
                    <span className="productCount">{item.cant}</span>
                </div>
            </div>
        )
}
