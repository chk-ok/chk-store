import React, { Component } from 'react';
import ItemCount from './ItemCount.js';

export default class Home extends Component {
    agregarAlCarrito(count) {
        let message = 'Agregaste '.concat(count).concat(' articulo(s) al carrito');
        window.alert (message);
    }
    render() {
        return (
            <div id="home">
            <div className="d-flex-col">
                <div id="welcomeMessage" className="cardBackground row jumbotron col-sm-6 mx-auto shadow my-5">
                    <h2>
                        {this.props.greeting}
                    </h2>
                    <small className="text-secondary mx-auto">Estamos trabajando para vos</small>
                </div>
            
                <div className="row col-sm-3 mx-auto">
                    <ItemCount initial="1" min="1" max="10" onAdd={this.agregarAlCarrito}/>
                </div>
            </div>
        </div>
        )
    }
}

