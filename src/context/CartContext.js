import React, {useState} from 'react';

const CartContext = React.createContext();

function CartProvider({defaultValue = [], children}) {

    const [cart, setCart] = useState(defaultValue);

    const cartLength = () => {
        return cart.reduce((accumulator, currentValue) => { return accumulator + currentValue.cant}, 0);
    }

    const addToCart = (newProduct, quantity) => {
        let prodIndex = cart.findIndex(item => item.prod.id === newProduct.id);
        if (prodIndex === -1){
            setCart (cart => [...cart, {prod: newProduct, cant: quantity}]);
        } else {
            let modifiedCart = [...cart];
            modifiedCart[prodIndex].cant += quantity;
            setCart (modifiedCart);
        }
    }

    return (
        <CartContext.Provider value={{cart, addToCart, cartLength}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext};