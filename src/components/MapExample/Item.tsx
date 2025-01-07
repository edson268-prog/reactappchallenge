import { Link } from "react-router-dom";

export default function Item({ producto }: any) {
    return (
        <>
            <div className="producto">
                <img src={producto.imagen} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <p>${producto.precio}</p>
                <p>{producto.categoria.nombre}</p>
                <p>{producto.descripcion}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
                {/* <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button> */}
            </div>
        </>
    )
}
