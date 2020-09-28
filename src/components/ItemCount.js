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
            let newCount = Number(this.state.count) + 1;
            this.setState({count : newCount});
            this.props.onUpdate(newCount);
          }
      }

      decrement = () => {
          if (this.state.count > this.props.min) {
            let newCount = Number(this.state.count) - 1;
            this.setState({count : newCount});
            this.props.onUpdate(newCount);
          }
      }

      actualizarContador = () => {
          let newValue = Number(document.getElementById("inputCantidad").value);
          if (!Number.isNaN(newValue) && newValue >= this.props.min && newValue <= this.props.max) {
            this.setState({count : newValue});
            this.props.onUpdate(newValue);
          }
      }
      
      render(){
        return (
            <div className="counter d-flex flex-column my-4">
              <div className="input-group">
                  <div className="input-group-prepend">
                      <Button action={this.decrement} label="-"/>
                  </div>
                  <Input id="inputCantidad" data={this.state.count} changeAction={this.actualizarContador}/>
                  <div className="input-group-append">
                  <Button action={this.increment} label="+"/>
                  </div>
              </div>
              <div className="mt-3 w-100 shadow">
                <Button action={()=>this.props.onAdd(this.state.count)} label="Agregar al carrito" outlined/>
              </div>
            </div>
        );
      }
    
    }