import React, { useState } from "react";
import { useEffect } from "react";
/* import birra1 from "../assets/birra1.jpg";
import birra2 from "../assets/birra2.jpg";
import birra3 from "../assets/birra3.jpg"; */
import GetProductos from "../Helpers/IndexDetail";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    let idURL = useParams().id;
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        GetProductos(idURL)
        .then(respuesta => setItem(respuesta))
        .catch(() => alert("No se encontro el producto"))
    }, []);

  return (
    <div>
        <ItemDetail categoria={item.category} id={item.id} title={item.title} stock={item.stock} description={item.description} img={item.img} initial={1}/>
    </div>
  )
}

export default ItemDetailContainer;