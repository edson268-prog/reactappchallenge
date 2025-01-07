import { useEffect, useState } from "react"
import { pedirItemPorId } from "../Helpers/PedirDatos";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = Number(useParams().id);


    useEffect(() => {
        pedirItemPorId(id)
            .then((res: any) => {
                setItem(res);
            })
    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}
