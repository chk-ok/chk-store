import React from 'react';
import ItemList from './ItemList';
import Spinner from './Spinner';

export default function Home(props) {

    if (props.products.length === 0) {
        return (
            <Spinner/>
        );
    }
    return (
        <div id="home">
            <div className="d-flex flex-column justify-content-center">
                <div id="welcomeMessage" className="py-5 px-4 welcomeCard rounded shadow my-5 mx-4">
                    <h2>
                        {props.greeting}
                    </h2>
                    <small className="mx-auto">Estamos trabajando para vos</small>
                </div>
            </div>
            <div>
                <ItemList items={props.products}/>
            </div>
        </div>
    )
}

