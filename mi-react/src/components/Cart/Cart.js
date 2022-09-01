import React from 'react'
import './Cart.css';
import { Link } from "react-router-dom"
import { useContext, /* useEffect */ } from 'react'
import { cartContext } from '../../store/cartContext';
/* import ItemCount from '../ItemCount'; */

function Cart() {

  const { cart, clearCart, removeItem, totalPrice, /* plusItemsCart, subItemsCart */ } = useContext(cartContext);


  /* useEffect(()=>{
    console.log(cart);
  }, [cart]) */
  
  if(cart.length === 0){
    
  } 
  else {
    return (
      <div className="container my-3">
          <div className="row d-flex">
          <div className="col-lg-6">
                  <div className="card">
                      <div className="card-body">
                        <div className='mb-1'>
                          <h5>Total: ${totalPrice()}</h5>
                          <span className="text-right ml-3"></span>
                        </div>
                        <div className='d-flex flex-column gap-1'>
                          <button type='button' className="btn-sm btn btn-out btn-primary btn-square btn-main"> CHECKOUT </button>
                          <Link to="/">
                            <button  type='button' className="btn-sm btn btn-out btn-success btn-square btn-main">CONTINUAR 
                            </button >
                          </Link>
                          <button onClick={clearCart} type='button' className="btn-sm btn btn-out btn-warning btn-square btn-main">
                              CLEAR CART
                          </button>
                        </div>  
                      </div>
                  </div>
              </div>
              {
                cart.map((item) => {
                  return (
                    <aside className="row" key={item.id}>
                      <div className='col'>
                        <div className="card">
                            <div className="mt-1 table table-borderless table-shopping-cart">
                                <div className='text-center'>
                                    <div>
                                        <div className='container'>
                                            <div className="aside">
                                              <img src={item.img} alt="imagen" />
                                              <p className="text-muted text-uppercase">{item.title}
                                              </p>
                                            </div>
                                              <p>Cantidad: <strong>{item.quantity}</strong></p>
                                              <p>Precio por unidad: <strong>${item.price}</strong></p>
                                        </div>
                                        <div>
                                          {/* <button type='button' className='btn btn-light'>-</button> */}
                                         {/*  <span className='px-2'>{item.quantity}</span> */}
                                          {/* <button type='button' className='btn btn-light'>+</button> */} 
                                        </div>
                                        {/* <ItemCount /> */}
                                        {/* <div>
                                            <div className="price-wrap"> <span className="price"></span> </div>
                                        </div> */}
                                        <div className="text-right d-none d-md-block">
                                          <button onClick={removeItem} type="button" className="btn btn-light" > Remove 
                                          </button> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </aside>
                    
                  )
                })
              }
          </div>
      </div>
    )
  }
}

export default Cart;