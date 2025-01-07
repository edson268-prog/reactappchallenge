import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const useCart = () => {
        const context = useContext(CartContext);
        if (!context) {
            throw new Error("useCart debe ser usado dentro de un CartProvider");
        }
        return context;
    };

    const { cantidadEnCarrito } = useCart();
    return (
        <div>
            <Link to="/carrito" className="navbar-link">
                Carrito
                <span className="numerito"> {cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}

export default CartWidget
