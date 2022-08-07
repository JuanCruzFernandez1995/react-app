import CardItem from "./CardItem";
import birra1 from "../assets/birra1.jpg";
import birra2 from "../assets/birra2.jpg";
import birra3 from "../assets/birra3.jpg";


const cards = [
    {
        id: 1,
        title: 'Boston Ale',
        img: birra1,
        description: 'Cerveza rubia tipo Boston Ale de bajo amargor, con balance hacia la malta y suave caramelo.',
        stock: 5,
    },
    {
        id: 2,
        title: 'Hoppy Golden',
        img: birra2,
        description: 'Esta cerveza rubia posee una alta tomabilidad, ligereza, dorada, con un toque de trigo y un delicado, aunque notorio, aroma a lúpulo.',
        stock: 5,
    },
    {
        id: 3,
        title: 'IPA',
        img: birra3,
        description: 'La India pale ale es un estilo de cerveza de tradición inglesa que se caracteriza como una ale​ pálida y espumosa con un alto nivel de alcohol y de lúpulo.​',
        stock: 5,
    },
];

function ItemListContainer(props){
   

    return (
        <div className="container"> 
            <div className="row pb-3 pt-3">
                <h3 className="fw-light">{props.greeting}</h3>
                {
                    cards.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <CardItem initial={1} stock={card.stock} title={card.title} img={card.img} description={card.description}/>
                    </div> 
                    ))
                }
            </div>
        </div>
    );
}

export default ItemListContainer;