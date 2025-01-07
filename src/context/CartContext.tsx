import { createContext, useEffect, useState } from "react";

type CartContextType = {
    carrito: any[];
    agregarAlCarrito: (item: any, cantidad: number) => void;
    cantidadEnCarrito: () => number;
    precioTotal: () => number;
    vaciarCarrito: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

const carritoInicial = JSON.parse(localStorage.getItem("carrito") ?? "[]");

export const CartProvider = ({ children }: any) => {
    const [carrito, setCarrito] = useState<any[]>(carritoInicial);

    const agregarAlCarrito = (item: any, cantidad: number) => {
        const itemAgregado = { ...item, cantidad }
        const estaEnElCarrito = carrito.find((producto) => producto.id === itemAgregado.id);
        const nuevoCarrito = [...carrito];

        if (estaEnElCarrito) {
            console.log("Ya está en el carrito")
            estaEnElCarrito.cantidad += cantidad;
            setCarrito(nuevoCarrito);
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        return setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>
            {children}
        </CartContext.Provider>)
}
