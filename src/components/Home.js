import React, { Component } from 'react';
import ItemList from './ItemList';
import Spinner from './Spinner';

export default class Home extends Component {
    constructor (){
        super();
        this.state = {products : [], loading: true};
    }
    componentDidMount(){
        const task = new Promise ((resolve, reject)=>{
            let productos = [
                {id: 1, name: 'Falda Estampada', price:'$450'},
                {id: 2, name: 'Jean basico', price:'$900'},
                {id: 3, name: 'Musculosa Algodon', price:'$300'},
                {id: 4, name: 'Falda Estampada', price:'$450'},
                {id: 5, name: 'Jean basico', price:'$900'},
                {id: 6, name: 'Musculosa Algodon', price:'$300'},
                {id: 7, name: 'Falda Estampada', price:'$450'},
                {id: 8, name: 'Jean basico', price:'$900'},
                {id: 9, name: 'Musculosa Algodon', price:'$300'},
                {id: 10, name: 'Falda Estampada', price:'$450'},
                {id: 11, name: 'Jean basico', price:'$900'},
                {id: 12, name: 'Musculosa Algodon', price:'$300'}
            ];
            setTimeout(()=> resolve(productos), 2000);
        });
        task.then(result => {
            this.setState({products: result});
            this.setState({loading: false})
        }, error => {
            console.log(error);
        }).catch(exception => {
            console.log(exception);
        })
    }
    render() {
        if (this.state.loading) {
            return (
                <Spinner/>
            );
        }
        return (
            <div id="home">
                <div className="d-flex flex-column justify-content-center">
                    <div id="welcomeMessage" className="py-5 px-4 welcomeCard rounded shadow my-5 mx-4">
                        <h2>
                            {this.props.greeting}
                        </h2>
                        <small className="mx-auto">Estamos trabajando para vos</small>
                    </div>
                </div>
                <div>
                    <ItemList items={this.state.products}/>
                </div>
            </div>
        )
    }
}

