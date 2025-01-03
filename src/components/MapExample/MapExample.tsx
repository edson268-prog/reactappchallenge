import { useEffect, useState } from 'react'
import products from '../../data/products.json';
import ItemList from './ItemList';

export default function MapExample() {
    const [productos, setProductos] = useState<any[]>([]);
    // let productos: any = [];

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            if (products && products.length > 0) {
                resolve(products); 
            } else {
                reject('No se pudieron obtener los productos');
            }
        });
    };

    useEffect(() => {
        pedirProductos().then((res: any) => {
            setProductos(res);
        });
    }, []); // Ejecuta al montar el componente
    return (
        <div>
            <ItemList productos={productos} />
        </div>
    );
}
