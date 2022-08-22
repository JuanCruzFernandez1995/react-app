import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    let copyCart = [...cart];

    function addToCart(item, quantity){
        if(!isInCart(item.id)){
            copyCart.push( {...item, quantity} );
            setCart(copyCart);
        } else {
            let cartUpdate = cart.map((prod) => {
                if(prod.id === item.id){
                    let productUpdate = {
                        ...prod,
                        quantity: parseInt(quantity + prod.quantity),
                    }
                    return productUpdate
                } else {
                    return prod
                }
            })
            setCart(cartUpdate)
        }
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