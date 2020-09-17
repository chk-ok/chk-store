import React from 'react'
import Item from './Item'

export default function ItemList(props) {
    return (
        <div className="d-flex justify-content-center flex-wrap mb-5">
            {props.items.map ((item) => <Item id={item.id} key={item.id} name={item.name} price={item.price}></Item>)}
        </div>
    )
}