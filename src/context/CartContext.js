import React, {useState} from 'react';

const CartContext = React.createContext();

function CartProvider({defaultValue = [], children}) {

    const [cart, setCart] = useState(defaultValue);

    const cartLength = () => {
        return cart.reduce((accumulator, currentValue) => { return accumulator + currentValue.cant}, 0);
    }

    return (
        <CartContext.Provider value={{cart, setCart, cartLength}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext};