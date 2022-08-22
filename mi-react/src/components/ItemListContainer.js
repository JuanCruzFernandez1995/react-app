
import React from "react";
import ItemList from "./ItemList";


function ItemListContainer(props){
    
    
    return (
        <div> 
            <ItemList greeting={props.greeting} />
        </div>
    );
}

export default ItemListContainer;