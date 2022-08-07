import CardItem from "./CardItem";
import birra1 from "../assets/birra1.jpg";
import birra2 from "../assets/birra2.jpg";
import birra3 from "../assets/birra3.jpg";
import React, { useState, useEffect} from "react";


const cards = [
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
];


function getProductos(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(cards), 500);
    });
}

function ItemListContainer(props){
    const [data, setData] = useState([]);

    function onAdd(count) {
        alert(`Agregaste ${count} al carrito`)
    }

    useEffect(() => {
        getProductos().then((respuesta) => {
            setData(respuesta);
        });
    }, []);
    
    return (
        <div className="container"> 
            <div className="row pb-3 pt-3">
                <h3 className="fw-light">{props.greeting}</h3>
                {
                    data.map(item => (
                    <div className="col-md-4 mb-2" key={item.id}>
                        <CardItem initial={1} stock={item.stock} title={item.title} img={item.img} description={item.description} onAdd={onAdd}/>
                    </div> 
                    ))
                }
            </div>
        </div>
    );
}

export default ItemListContainer;