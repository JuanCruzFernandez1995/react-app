import React from 'react';

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = React.useState(initial);

    const addQuant = () => {
      if(count < stock){
        setCount (count + 1)
      }
      
    }
    
    const removeQuant = () => {
      if(count > 1){
        setCount(count - 1)
      }
      
    }

    
  return (
    <> 
        
          <div className='d-flex justify-content-center align-items-baseline'>
            <button type="button" className="btn btn-primary" onClick={removeQuant}>-</button>
            <p className='mx-2'>Cantidad: {count} </p>
            <button type="button" className="btn btn-primary" onClick={addQuant}>+</button>
          </div>
          <div className='text-center'>
            <button className="btn btn-primary mb-3" type="button" onClick={()=> onAdd(count)}>Agregar al carrito</button>
          </div>
        </>
    
  )
}

export default ItemCount;