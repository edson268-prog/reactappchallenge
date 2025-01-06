import { useEffect, useState } from 'react'
// import products from '../../data/products.json';
import ItemList from './ItemList';
import { pedirDatos } from '../Helpers/PedirDatos';
import './MapExample.css'

export default function MapExample() {
    const [productos, setProductos] = useState<any[]>([]);
    let [titulo, setTitulo] = useState("Productos");
    // let productos: any = [];

    // const pedirProductos = () => {
    //     return new Promise((resolve, reject) => {
    //         if (products && products.length > 0) {
    //             resolve(products); 
    //         } else {
    //             reject('No se pudieron obtener los productos');
    //         }
    //     });
    // };

    useEffect(() => {
        pedirDatos().then((res: any) => {
            setProductos(res);
        });
    }, []); // Ejecuta al montar el componente
    return (
        <div className="item-list-container">
            <h1>{titulo}</h1>
            <ItemList productos={productos} />
        </div>
    );
}
