import React, { Component } from 'react'
import Button from './Button';
import Input from './Input';

export default class ItemCount extends Component {
    constructor (props){
        super(props);
        this.state = {count: this.props.initial};
      }
    
      increment = () => {
          if (this.state.count < this.props.max) {
            let newcount = Number(this.state.count) + 1;
            this.setState({count : newcount});
          }
      }

      decrement = () => {
          if (this.state.count > this.props.min) {
            let newcount = Number(this.state.count) - 1;
            this.setState({count : newcount});
          }
      }

      actualizarContador = () => {
          let newValue = Number(document.getElementById("inputCantidad").value);
          if (!Number.isNaN(newValue) && newValue >= this.props.min && newValue <= this.props.max) {
            this.setState({count : newValue});
          }
      }
      
      render(){
        return (
            <div>
              <div className="input-group shadow">
                  <div className="input-group-prepend">
                      <Button action={this.decrement} label="-"/>
                  </div>
                  <Input id="inputCantidad" data={this.state.count} changeAction={this.actualizarContador}/>
                  <div className="input-group-append">
                  <Button action={this.increment} label="+"/>
                  </div>
              </div>
              <div className="mt-4">
                <Button action={()=>this.props.onAdd(this.state.count)} label="Agregar al carrito" outlined/>
              </div>
            </div>
        );
      }
    
    }