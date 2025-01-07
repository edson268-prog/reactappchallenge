import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ item }: any) => {
    const useCart = () => {
        const context = useContext(CartContext);
        if (!context) {
            throw new Error("useCart debe ser usado dentro de un CartProvider");
        }
        return context;
    };

    const { carrito, agregarAlCarrito } = useCart();
    console.log(carrito);


    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad((cantidad) => cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad((cantidad) => cantidad + 1)
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
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }} />
                </div>
            </div>
        </div>
    )
}
