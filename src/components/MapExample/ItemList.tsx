import Item from "./Item"

export default function ItemList({ productos }: any) {
    return (
        <>
            <div className="productos-grilla">
                {
                    productos.length > 0 ?
                        productos.map((producto: { id: any }) => {
                            return <Item key={producto.id} producto={producto} />
                        })
                        : <p>Cargando productos...</p>
                }

            </div>
            {/* {productos.map((producto: any) => {
                return (
                    <Item producto={producto} />
                )
            })} */}
        </>
    )
}
