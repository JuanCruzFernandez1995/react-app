import React, { useState } from "react";
import { useEffect } from "react";
/* import GetProductos from "../Helpers/IndexDetail"; */
import getProductos from "../Helpers/Index";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    let idURL = useParams().id;
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        getProductos(idURL)
        .then(respuesta => setItem(respuesta))
        .catch(() => alert("No se encontro el producto"))
    }, [idURL]);

  return (
    <div>
        <ItemDetail price={item.price} categoria={item.category} id={item.id} title={item.title} stock={item.stock} description={item.description} img={item.img} initial={1}/>
    </div>
  )
}

export default ItemDetailContainer;