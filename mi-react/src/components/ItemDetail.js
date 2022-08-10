import React from 'react'

function ItemDetail({title, stock, img, description}) {
  return (
    <div className="card my-2" style={{width: "14rem", height: "100%"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body d-md-flex flex-column justify-content-between align-items-center">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-secondary">{description}</p> 
            <p>Stock: {stock}</p>   
        </div>
    </div>
  )
}

export default ItemDetail;