import CardItem from "./CardItem";
import React, { useState, useEffect} from "react";
import getProductos from "../Helpers/Index";
import { useParams } from "react-router-dom";
import { collection, where } from "firebase/firestore";
import firestoreDB from "../services/firebase";
import { getDocs, query } from 'firebase/firestore';


function ItemList(props){
    let { idCategory } = useParams();
    const [data, setData] = useState([]);
    
    useEffect(()=> {
        getProductos().then((respuesta) => {
            if(idCategory){
                const apiDataCollection = collection(firestoreDB, "bebidas");
                const q = query(apiDataCollection, where("category", "==", idCategory))
                getDocs(q).then( snapshot => {
                    const docData = snapshot.docs.map(doc => {
                        return {
                            ...doc.data(), id: doc.id
                        }
                    })
                    setTimeout( () => setData(docData), 500)
                })
            } else {
                setData(respuesta)
            }
            /* let filters = respuesta.filter ((element)=> element.category === idCategory);
            if(idCategory === undefined) {
                setData(respuesta);
            } else {
                setData(filters);
            } */
    });
    }, [idCategory]);

    return (
        <div className="container"> 
            <div className="row pb-3 pt-3">
                <h3 className="fw-light">{props.greeting}</h3>
                {
                    data.map(item => (
                    <div className="col-md-4 mb-2" key={item.id}>
                        <CardItem price={item.price} id={item.id} initial={1} stock={item.stock} title={item.title} img={item.img} description={item.description}/>
                    </div> 
                    ))
            
                }
            </div>
        </div>
    );
}

export default ItemList;