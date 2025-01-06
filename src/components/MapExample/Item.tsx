export default function Item({ producto }: any) {
    return (
        <>
            <div className="producto">
                <img src={producto.imagen} />
                <h2>{producto.nombre}</h2>
                <p>${producto.precio}</p>
                <p>{producto.descripcion}</p>
                <a className="ver-mas" href={`/item/${producto.id}`}>Ver más</a>
                {/* <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button> */}
            </div>
        </>
    )
}
