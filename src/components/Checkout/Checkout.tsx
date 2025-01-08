import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Checkout = () => {
    const useCart = () => {
        const context = useContext(CartContext);
        if (!context) {
            throw new Error("useCart debe ser usado dentro de un CartProvider");
        }
        return context;
    };

    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useCart();
    const { register, handleSubmit } = useForm();

    const comprar = (data: any) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "Pedidos");

        addDoc(pedidosRef, pedido).then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        });
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form action="" className="formulario" onSubmit={handleSubmit(comprar)}>
                <input
                    type="text"
                    placeholder='Ingrese su nombre'
                    {...register("nombre")}
                />
                <input
                    type="email"
                    placeholder='Ingrese su correo'
                    {...register("email")}
                />
                <input
                    type="phone"
                    placeholder='Ingrese su telefono'
                    {...register("telefono")}
                />

                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout
