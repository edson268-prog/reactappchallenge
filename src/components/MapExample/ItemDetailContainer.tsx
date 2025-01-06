import { useEffect, useState } from "react"
import { pedirItemPorId } from "../Helpers/PedirDatos";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = ({ itemId }: any) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        pedirItemPorId(itemId)
            .then((res: any) => {
                setItem(res);
            })
    }, [itemId])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}
