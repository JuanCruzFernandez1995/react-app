import React from 'react';

function ItemCount({stock, initial}) {
    const [count, setCount] = React.useState(initial);

    const handleAdd = () => {
      if(count < stock){
        setCount (count + 1)
      }
    }
    
    const handleRemove = () => {
      if(count > initial){
        setCount(count - 1)
      }
    }
    const addCart = () => {
      if(stock > 0){
        alert(`Agregaste ${count} item`)
      } else {
        alert(`No hay stock de este producto`)
      }
    }
    
  return (
    <> 
        
          <div className='d-flex justify-content-center align-items-baseline'>
            <button type="button" className="btn btn-primary" onClick={handleRemove}>-</button>
            <p className='mx-3'>Cantidad: {count} </p>
            <button type="button" className="btn btn-primary" onClick={handleAdd}>+</button>
          </div>
          <div className='text-center'>
            <button className="btn btn-primary mb-3" type="button" onClick={addCart}>Agregar al carrito</button>
          </div>
        </>
    
  )
}

export default ItemCount;