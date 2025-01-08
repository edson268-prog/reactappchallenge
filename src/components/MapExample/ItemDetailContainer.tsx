import { useEffect, useState } from "react"
import { pedirItemPorId } from "../Helpers/PedirDatos";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState<any>(null);
    const id = Number(useParams().id);
    const strId = useParams().id ?? "";


    // useEffect(() => {
    //     pedirItemPorId(id)
    //         .then((res: any) => {
    //             setItem(res);
    //         })
    // }, [id])

    // FIREBASE
    useEffect(() => {
        const docRef = doc(db, "Productos", strId);
        getDoc(docRef).then((resp) => {
            setItem({ ...resp.data(), id: resp.id });
        })
    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}
