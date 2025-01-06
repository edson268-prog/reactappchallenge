import { useEffect, useState } from "react";

export default function PokeList() {
    const [currentList, setCurrentList] = useState<any>({});
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5");
    const [previous, setPrevious] = useState("");
    const [next, setNext] = useState("");


    const handleAnterior = () => {
        setUrl(previous);
    }

    const handleSiguiente = () => {
        setUrl(next);
    }

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                console.log(data)
                setCurrentList(data);
                setNext(data.next);
                setPrevious(data.previous);
            })
    }, [url])

    return (
        <div>
            <div>{currentList.results &&
                <div>
                    {currentList.results.map((pokemon: any) => {
                        return (
                            <div key={pokemon.name}>
                                <h2>{pokemon.name}</h2>
                            </div>
                        )
                    })}
                    <br />
                    {previous ? <button onClick={handleAnterior}>Anterior</button> : <button disabled>Anterior</button>}
                    <button onClick={handleSiguiente}>Siguiente</button>
                </div>
            }</div>
        </div>
    )
}
