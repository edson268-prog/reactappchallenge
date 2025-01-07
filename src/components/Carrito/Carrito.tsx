import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Carrito = () => {
    const useCart = () => {
        const context = useContext(CartContext);
        if (!context) {
            throw new Error("useCart debe ser usado dentro de un CartProvider");
        }
        return context;
    };

    const { carrito, precioTotal, vaciarCarrito } = useCart()

    const handleVaciar = () => {
        vaciarCarrito();
    }
    return (
        <div className='Container'>
            <h1 className="main-title">Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h2>{prod.nombre}</h2>
                        <p>Precio unit: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar</button>
                </> :
                <h2>El carrito esta vacío</h2>
            }

        </div>
    )
}

export default Carrito
