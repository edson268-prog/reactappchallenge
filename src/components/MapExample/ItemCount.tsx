import './MapExample.css'

type ItemCountProps = {
    cantidad: number;
    handleSumar: () => void;
    handleRestar: () => void;
    handleAgregar: () => void;
};

export default function ItemCount({ cantidad, handleSumar, handleRestar, handleAgregar }: ItemCountProps) {
    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}
