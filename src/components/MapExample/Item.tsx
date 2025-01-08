import { Link } from "react-router-dom";

export default function Item({ producto }: any) {
    return (
        <>
            <div className="producto">
                <img src={producto.Imagen} alt={producto.nombre} />
                <h2>{producto.Nombre}</h2>
                <p>${producto.Precio}</p>
                {/* <p>{producto.categoria.nombre}</p> */}
                <p>{producto.Categoria}</p>
                <p>{producto.Descripcion}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
                {/* <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button> */}
            </div>
        </>
    )
}
