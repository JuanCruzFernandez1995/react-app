import React from 'react'
import ItemCount from './ItemCount';

function ItemDetail({title, stock, img, description, initial, id}) {

  const quantityInCart = 0; //Reemplazar por un state para hacer dinamico y agregar el set en handleAdd

  function handleAdd(count){
    console.log("OK");
  }

  return (
    <div className='d-flex align-items-center justify-content-end my-2 gap-5'>
      <div className="card" style={{width: "14rem", height: "100%"}}>
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body d-md-flex flex-column justify-content-between align-items-center">
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-secondary">{description}</p>   
          </div>
      </div>
      <div className='align-self-start border rounded p-2'>
      <ItemCount stock={stock} initial={initial} onAdd={handleAdd}/>
      <p className='border'>Stock: {stock}</p>
      </div>
    </div>
    
  )
}

export default ItemDetail;