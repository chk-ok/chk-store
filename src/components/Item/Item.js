import React from 'react';
import './Item.css';

export default function Item({item}) {
    return (
            <div id={item.id} className="d-flex flex-column productCard rounded mx-3 my-4">
                <img src={item.image} alt="" className="cardImage rounded p-3"/>
                <div className="d-flex flex-column p-3 cardDetail">
                    <span className="productName">{item.title}</span>
                    <span className="productPrice">${item.price}</span>
                </div>
            </div>
    )
}
