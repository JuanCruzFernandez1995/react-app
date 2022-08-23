import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    let copyCart = [...cart];
    //Agregar un producto, previamente valida con isInCart, si existe solo actualiza la cantidad, sino lo agrega.
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
    //Validacion si un producto ya existe en el cart por su ID
    function isInCart (id){
        return (cart.some((itemInCart) => itemInCart.id === id))
    }
    //Eliminar todos los productos del cart
    function clearCart (){
        setCart([])
    }
    //Eliminar un producto del cart
    function removeItem (item){
        const itemRemove = findItem(item.id);
        const indexItem = copyCart.indexOf(itemRemove);
        copyCart.splice(indexItem, 1);
        setCart(copyCart);
        console.log(copyCart);
    }
    //Buscar un item por su ID
    function findItem(id){
        return (copyCart.find(item => item.id === parseInt(id)))
    }

    return (
        <cartContext.Provider value={ {cart, addToCart, clearCart, removeItem, isInCart} }>
            {children}
        </cartContext.Provider>
    )
}