import birra1 from "../assets/birra1.jpg";
import birra2 from "../assets/birra2.jpg";
import birra3 from "../assets/birra3.jpg";
import birra4 from "../assets/birra4.jpg";
import birra5 from "../assets/birra5.jpg";
import birra6 from "../assets/birra6.jpg";
import gin1 from "../assets/gin1.jpeg";
import gin2 from "../assets/gin2.jpeg";
import gin3 from "../assets/gin3.jpg";

const cardsJSON = [
    {
        id: 1,
        title: 'Boston Ale',
        img: birra1,
        description: 'Cerveza rubia tipo Boston Ale de bajo amargor, con balance hacia la malta y suave caramelo',
        stock: 5,
        category: 'cerveza',
    },
    {
        id: 2,
        title: 'Hoppy Golden',
        img: birra2,
        description: 'Esta cerveza rubia posee una alta tomabilidad, ligereza, dorada, con un toque de trigo y un delicado, aunque notorio, aroma a lúpulo',
        stock: 5,
        category: 'cerveza',
    },
    {
        id: 3,
        title: 'IPA',
        img: birra3,
        description: 'La India pale ale es un estilo de cerveza de tradición inglesa que se caracteriza como una ale​ pálida y espumosa con un alto nivel de alcohol y de lúpulo​',
        stock: 5,
        category: 'cerveza',
    },
    {
        id: 4,
        title: 'NEIPA',
        img: birra4,
        description: 'En aroma y sabor, la NEIPA se caracteriza por tener al lúpulo como protagonista absoluto',
        stock: 5,
        category: 'cerveza',
    },
    {
        id: 5,
        title: 'STOUT',
        img: birra5,
        description: 'Stout es el nombre de un estilo de cerveza, tipo ale, muy oscura, originario de las islas británicas. Era el nombre utilizado para la cerveza más fuerte​',
        stock: 5,
        category: 'cerveza',
    },
    {
        id: 6,
        title: 'CREAM ALE',
        img: birra6,
        description: 'La Cream ale es un estilo de cerveza estadounidense de color claro y bien atenuado, es decir, más seco y con un contenido de alcohol algo más alto que la cerveza normal​',
        stock: 5,
        category: 'cerveza',
    },
    {
        id: 7,
        title: 'Beefeater',
        img: gin1,
        description: 'Beefeater es el gin Premium más exportado del mundo, su distinguido sabor se puede disfrutar en más de 170 países',
        stock: 5,
        category: 'ginebra',
    },
    {
        id: 8,
        title: 'Bull Dog',
        img: gin2,
        description: 'Ginebra tipo London Dry gin elaborada en Reino Unido. Todos los ingredientes se maceran con la base de alcohol tridestilado y se redestilan una vez más​',
        stock: 5,
        category: 'ginebra',
    },
    {
        id: 9,
        title: 'Bombay',
        img: gin3,
        description: 'Al paladar, transmite piel de limón y una dulzura media, seguidas de un enebro intenso y una dulzura ácida de limón, apoyados por notas de salida de cilantro y regaliz​',
        stock: 5,
        category: 'ginebra',
    },
];

function GetProductos(id){
    
    return new Promise((resolve, reject)=>{
        let itemEncontrado = cardsJSON.find(element => element.id === Number(id));
        if (itemEncontrado === undefined || null){
            reject("No se encontro el producto")
        }
        resolve(itemEncontrado);
    });
}

export default GetProductos;
