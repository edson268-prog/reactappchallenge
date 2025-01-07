import { useState } from "react";
import ItemCount from "./ItemCount"

export const ItemDetail = ({ item }: any) => {
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad((cantidad) => cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad((cantidad) => cantidad + 1)
    }

    const handleAgregar = () => {
        console.log({...item, cantidad})
    }

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.nombre} />
                <div>
                    <h3 className="titulo">{item.nombre}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {item.categoria.nombre}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
                </div>
            </div>
        </div>
    )
}
