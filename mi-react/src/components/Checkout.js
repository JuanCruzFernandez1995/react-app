import { cartContext } from '../store/cartContext';
import { useContext } from 'react';
import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'
import firestoreDB from "../services/firebase";
import { async } from '@firebase/util';

function Checkout(){
    const {cart, totalPrice, clearCart } = useContext(cartContext);
    const [userBuyer, setUserBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    })
    
    const [orderFirebase, setOrderFirebase] = useState({
        id: '',
        complete: false,
    });

    const purchaseOrder = {
        buyer: {...userBuyer},
        items: [...cart],
        total: totalPrice(),
        date: new Date(),
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const collectionRef = collection(firestoreDB, "orders");
        const order = await addDoc(collectionRef, purchaseOrder);
        setOrderFirebase({ id: order.id, complete: true });
        clearCart();
    }

    function inputChangeHandler(e) {
        const input = e.target;
        const value = input.value;
        const inputName = input.name;
        let copyUserData = {...userBuyer};
        copyUserData[inputName] = value;
        setUserBuyer(copyUserData);
    }

    if (orderFirebase.complete === true) {
        return (
            <main>
                <div>
                    <h1>
                        Haz realizado correctamente una compra!
                    </h1>
                    <h3> Gracias por confiar en nosotros {userBuyer.name} </h3>
                    <h5> A la brevedad recibiras mas informacion de tu compra en la siguiente direccion: {userBuyer.email} </h5>
                    <h5> Tu codigo de seguimiento: {orderFirebase.id} </h5>
                    <Link to="/">
                        <button>
                            Continuar comprando
                        </button>
                    </Link>
                </div>
            </main>
        )
    }
    else {
        return (
            <main>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='card-title'> Finalizando la compra </h1>
                    <form className='m-3 p-3 card d-flex flex-column text-center gap-1' onSubmit={handleSubmit}>
                        <legend className='label'> Complete los datos</legend>
                        <label className='label' htmlFor='name'> Nombre </label>
                        <input className='formInput' type="text" name='name' value={userBuyer.name} onChange={inputChangeHandler} placeholder='Example: Juan Cruz Fernandez' required></input>
                        <label className='label' htmlFor="phone">Teléfono</label>
                        <input className='formInput' type="number" name='phone' value={userBuyer.phone} onChange={inputChangeHandler} placeholder='Cod.Area(sin 0) - Num' required></input>
                        <label className='label' htmlFor="email">Email</label>
                        <input className='formInput' type="email" name='email' value={userBuyer.email} onChange={inputChangeHandler} placeholder='ejemplo@ejemplo.com' required></input>
                        <input className='buttonForm' type="submit" value='Comprar'></input>
                    </form>
                </div>
            </main>
        )
    }
}

export default Checkout;