import Item from "./item"

export default function ItemList({ productos }: any) {
    return (
        <>
            <h1>Lista de Productos</h1>
            {productos.map((producto: any) => {
                return (
                    <Item producto={producto} />
                )
            })}
        </>
    )
}
