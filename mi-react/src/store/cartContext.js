import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    function addToCart(item, quantity){
        let copyCart = [...cart];
        copyCart.push( {...item, quantity} );
        setCart(copyCart);
        
        
    }

    function isInCart (id){
        return (cart.some((itemInCart) => itemInCart.id === id))
    }

    function removeAll (){
        setCart([])
    }

    return (
        <cartContext.Provider value={ {cart, addToCart, removeAll, isInCart} }>
            {children}
        </cartContext.Provider>
    )
}