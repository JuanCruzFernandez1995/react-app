import React from 'react';



function CardItem ({title, img, description}){
    const [clicks, setClick] = React.useState(0);

    
    function handleClick(){
        setClick(clicks + 1)
    };

    

    return(
    <div className="card" style={{width: "14rem", height: "100%"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body d-md-flex flex-column justify-content-between">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-secondary">{description}</p>
            <div className="d-md-flex gap-2 align-items-baseline">
                <button type="button" className="btn btn-primary" onClick={handleClick}>+</button>
                <button type="button" className="btn btn-primary"onClick={() => setClick(clicks - 1)}>-</button>
                <p>Cantidad: {clicks}</p>
            </div>
        </div>
    </div>
    );
}

export default CardItem;