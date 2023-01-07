import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, serCart] = useState([]);

    const isInCart = (id) => {
            return cart.some (x => x.id === id)
        }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id);
            cart[pos].quantity += quantity;
            serCart([...cart]);
        } else {
            serCart([...cart, {...item, quantity:quantity}])
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(x => x.id !== id);
        serCart([...products]);
    }
    
    const clear = () => {
        serCart([]);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0);
    }

    const sumaTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.precio, 0);
    }

    return(
        <CartContext.Provider value= {{cart, addItem, removeItem, clear, cartTotal, sumaTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
