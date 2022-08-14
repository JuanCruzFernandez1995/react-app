import CardItem from "./CardItem";
import React, { useState, useEffect} from "react";
import getProductos from "../Helpers/Index";


function ItemList(props){
    const [data, setData] = useState([]);

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
                        <CardItem id={item.id} initial={1} stock={item.stock} title={item.title} img={item.img} description={item.description}/>
                    </div> 
                    ))
                }
            </div>
        </div>
    );
}

export default ItemList;