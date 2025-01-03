export default function Item({ producto }: any) {
    return (
        <>
            <div key={producto.id}>
                <img src={producto.image} alt={producto.title} />
                <p>{producto.title}</p>
                <p>Precio: ${producto.price}</p>
                <p>{producto.description}</p>
            </div>
        </>
    )
}
