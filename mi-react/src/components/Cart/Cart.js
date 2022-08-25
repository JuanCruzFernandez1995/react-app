import React from 'react'
import './Cart.css';
import { Link } from "react-router-dom"
import { useContext, useEffect } from 'react'
import { cartContext } from '../../store/cartContext';

function Cart() {

  const { cart, addToCart, clearCart, removeItem, isInCart, findItem } = useContext(cartContext);

  useEffect(()=>{
    console.log(cart);
  }, [cart])
  
  if(cart.length === 0){
    <h1>EMPTY CART</h1>
  } 
  else {
    return (
      <div className="container-fluid my-3">
          <div className="row">
              {
                cart.map((item) => {
                  return (
                    <aside className="col-lg-9" key={item.id}>
                      <div className="card">
                        <div className="table-responsive">
                            <table className="mt-3 table table-borderless table-shopping-cart">
                                <thead className="text-muted text-uppercase small text-center">
                                        <th scope="col" >Product</th>
                                        <th scope="col" >Quantity</th>
                                        <th scope="col" >Price</th>
                                        <th scope="col" >Action</th>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>
                                        <td>
                                            <div className="aside">
                                              <img src={item.img} alt="imagen" />
                                              <p className="text-muted text-uppercase">{item.title}
                                              </p>
                                            </div>
                                        </td>
                                        <td>
                                          <button type='button' className='btn btn-light'>-</button>
                                          <span className='px-2'>{item.quantity}</span>
                                          <button type='button' className='btn btn-light'>+</button> 
                                        </td>
                                        <td>
                                            <div className="price-wrap"> <span className="price">$10.00</span> </div>
                                        </td>
                                        <td className="text-right d-none d-md-block">
                                          <button onClick={removeItem} type="button" className="btn btn-light" > Remove 
                                          </button> 
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                      </div>
                    </aside>
                  )
                })
              }
              <aside className="col-lg-3">
                  <div className="card">
                      <div className="card-body">
                        <div className='mb-1'>
                          <h5>Total price:</h5>
                          <span className="text-right ml-3">$69.97</span>
                        </div>
                        <button type='button' className="btn-sm btn btn-out btn-primary btn-square btn-main"> Make Purchase </button>
                        <Link to="/">
                          <button  type='button' className="btn-sm btn btn-out btn-success btn-square btn-main mt-2">Continue Shopping 
                          </button>
                        </Link>
                      </div>
                  </div>
              </aside>
          </div>
      </div>
    )
  }
}

export default Cart;