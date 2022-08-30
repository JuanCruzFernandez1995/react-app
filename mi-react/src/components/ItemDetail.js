import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { cartContext } from '../store/cartContext';

function ItemDetail({title, stock, img, description, initial, id, categoria, price}) {

  const qtyCart = 0;
  const [quantityInCart, setQuantityInCart] = useState(qtyCart);
  const {addToCart} = useContext(cartContext);

  function handleAdd(count){
    setQuantityInCart(count);
    let itemToCart = {title, stock, img, description, id, categoria, price};
    addToCart(itemToCart, count);
  }

  return (
    <div className='d-flex align-items-center justify-content-end my-2 gap-5'>
      <div className="card" style={{width: "14rem", height: "100%"}}>
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body d-md-flex flex-column justify-content-between align-items-center">
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-secondary">{description}</p> 
              <p className='card-text text-secondary'>Precio: ${price}</p>  
          </div>
      </div>
      <div className='align-self-start border rounded p-2'>
      {quantityInCart === 0 ? (
        <ItemCount stock={stock} initial={initial} onAdd={handleAdd}/>) : (
        <Link to="/cart">
          <h6>Ir al carrito</h6>
        </Link>
      )}
      <p className='border'>Stock: {stock}</p>
      </div>
    </div>
    
  )
}

export default ItemDetail;