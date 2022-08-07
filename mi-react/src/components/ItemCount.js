import React from 'react';

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = React.useState(1);

    const handleAdd = () => {
      if(count < stock){
        setCount (count + 1)
      }
    }
    
    const handleRemove = () => {
      if(count > 1){
        setCount(count - 1)
      }
    }
    /* const addCart = () => {
      if(stock > 0){
        alert(`Agregaste ${count} item`)
        setCount(initial)
      } else {
        alert(`No hay stock de este producto`)
        setCount(initial)
      }
    } */
    
  return (
    <> 
        
          <div className='d-flex justify-content-center align-items-baseline'>
            <button type="button" className="btn btn-primary" onClick={handleRemove}>-</button>
            <p className='mx-3'>Cantidad: {count} </p>
            <button type="button" className="btn btn-primary" onClick={handleAdd}>+</button>
          </div>
          <div className='text-center'>
            <button className="btn btn-primary mb-3" type="button" onClick={onAdd}>Agregar al carrito</button>
          </div>
        </>
    
  )
}

export default ItemCount;