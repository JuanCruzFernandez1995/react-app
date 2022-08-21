import CardItem from "./CardItem";
import React, { useState, useEffect} from "react";
import getProductos from "../Helpers/Index";
import { useParams } from "react-router-dom";


function ItemList(props){
    let catFilter = useParams().category;
    const [data, setData] = useState([]);
    

    useEffect(() => {
        getProductos().then((respuesta) => {
            if(catFilter){
                let categoryFilter = data.filter(element => element.category === catFilter)
                setTimeout(()=> setData(categoryFilter), 1000);
            } else{
               setData(respuesta);
            }
        });
    }, [catFilter]);

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