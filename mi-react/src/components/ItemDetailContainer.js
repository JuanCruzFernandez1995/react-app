import React, { useState } from "react";
import { useEffect } from "react";
/* import birra1 from "../assets/birra1.jpg";
import birra2 from "../assets/birra2.jpg";
import birra3 from "../assets/birra3.jpg"; */
import GetProductos from "../Helpers/IndexDetail";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

/* const cardsJSON = [
    {
        id: 1,
        title: 'Boston Ale',
        img: birra1,
        description: 'Cerveza rubia tipo Boston Ale de bajo amargor, con balance hacia la malta y suave caramelo',
        stock: 5,
    },
    {
        id: 2,
        title: 'Hoppy Golden',
        img: birra2,
        description: 'Esta cerveza rubia posee una alta tomabilidad, ligereza, dorada, con un toque de trigo y un delicado, aunque notorio, aroma a lúpulo',
        stock: 5,
    },
    {
        id: 3,
        title: 'IPA',
        img: birra3,
        description: 'La India pale ale es un estilo de cerveza de tradición inglesa que se caracteriza como una ale​ pálida y espumosa con un alto nivel de alcohol y de lúpulo​',
        stock: 5,
    },
    {
        id: 4,
        title: 'NEIPA',
        img: birra3,
        description: 'En aroma y sabor, la NEIPA se caracteriza por tener al lúpulo como protagonista absoluto',
        stock: 5,
    },
    {
        id: 5,
        title: 'STOUT',
        img: birra3,
        description: 'Stout es el nombre de un estilo de cerveza, tipo ale, muy oscura, originario de las islas británicas. Era el nombre utilizado para la cerveza más fuerte​',
        stock: 5,
    },
    {
        id: 6,
        title: 'CREAM ALE',
        img: birra3,
        description: 'LCream ale es un estilo de cerveza estadounidense de color claro y bien atenuado, es decir, más seco y con un contenido de alcohol algo más alto que la cerveza normal​',
        stock: 5,
    },
]; */


function ItemDetailContainer() {
    let idURL = useParams().id;
    const [item, setItem] = useState([]);
    /* let idURL = useParams().id;

    function getProductos(){
        return new Promise((resolve, reject)=>{
            let itemEncontrado = cardsJSON.find(element => element.id == idURL);
            if (itemEncontrado === undefined || null){
                reject("No se encontro el producto")
            }
            resolve(itemEncontrado);
        });
    }; */
    
    useEffect(()=>{
        GetProductos(idURL)
        .then(respuesta => setItem(respuesta))
        .catch(() => alert("No se encontro el producto"))
    }, []);

  return (
    <div>
        <ItemDetail item={item.id} title={item.title} stock={item.stock} description={item.description} img={item.img} initial={1}/>
    </div>
  )
}

export default ItemDetailContainer;