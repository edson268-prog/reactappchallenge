import { useEffect, useState } from 'react'
// import products from '../../data/products.json';
import ItemList from './ItemList';
import { pedirDatos } from '../Helpers/PedirDatos';
import './MapExample.css'
import { useParams } from 'react-router-dom';
import { toCapital } from '../Helpers/ToCapital';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../firebase/config"

export default function MapExample() {
    const [productos, setProductos] = useState<any[]>([]);
    const categoria = useParams().categoria;

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

    // useEffect(() => {
    //     pedirDatos().then((res: any) => {
    //         if (categoria) {
    //             setProductos(res.filter((prod: any) => prod.categoria.id == categoria));
    //             setTitulo(categoria)
    //         } else {
    //             setProductos(res);
    //             setTitulo("Productos")
    //         }
    //     });
    // }, [categoria]);

    // FIRESTORE
    useEffect(() => {
        const productosRef = collection(db, "Productos");
        const queryFirebase = categoria ? query(productosRef, where("Categoria", "==", categoria)) : productosRef;
        getDocs(queryFirebase).then((resp) => {
            setProductos(resp.docs.map((doc) => {
                setTitulo(categoria ? categoria : "Productos");
                return { ...doc.data(), id: doc.id }
            }))
        })

    }, [categoria]);


    return (
        <div className="item-list-container">
            <h1>{toCapital(titulo)}</h1>
            <ItemList productos={productos} />
        </div>
    );
}
