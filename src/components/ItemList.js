import React from 'react'
import Item from './Item'
import {Link} from 'react-router-dom'

export default function ItemList(props) {
    return (
        <div className="d-flex justify-content-center flex-wrap mb-5">
            {props.items.map ((item) => 
                <Link to={`/item/${item.id}`}>
                    <Item id={item.id} key={item.id} name={item.name} price={item.price}></Item>
                </Link>)}
        </div>
    )
}