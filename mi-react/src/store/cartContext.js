import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    let copyCart = [...cart];
    console.log(copyCart);
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
        
    }
    //Buscar un item por su ID
    function findItem(id){
        return (copyCart.find(item => item.id === parseInt(id)))
    }

    function totalAmount() {
        let amountCart = 0;
        copyCart.map(item => amountCart += item.quantity);
        return amountCart;
    }

    function totalPrice() {
        let total = 0;
        copyCart.map((item) => total += item.price * item.quantity);
        return total;
    }
    function totalStock(item) {
        let itemStock = findItem(item.id)
        if (itemStock) {
            return itemStock.stock
        }
        else {
            return item.stock
        }
    }
    function plusItemsCart(id) {
        
        /* if (copyCart[id].stock !== 0) {
            copyCart[id].quantity += 1;
            copyCart[id].stock -= 1;
            setCart(copyCart)
        } */
    }
    function subItemsCart(id) {
        if (copyCart[id].quantity !== 1) {
            copyCart[id].quantity -= 1;
            copyCart[id].stock += 1;
            setCart(copyCart);
        }
    }

    return (
        <cartContext.Provider value={ {cart, addToCart, clearCart, removeItem, isInCart, findItem, totalAmount, totalPrice, totalStock, plusItemsCart, subItemsCart} }>
            {children}
        </cartContext.Provider>
    )
}