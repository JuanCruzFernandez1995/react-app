import React from 'react';
import ItemCount from './ItemCount';


function CardItem ({title, img, description, stock, initial}){
    
    return(
    <div className="card" style={{width: "14rem", height: "100%"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body d-md-flex flex-column justify-content-between align-items-center">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-secondary">{description}</p>    
        </div>
        <div>
            <ItemCount stock={stock} initial={initial} />
        </div>
    </div>
    );
}

export default CardItem;