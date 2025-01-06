import { useEffect, useState } from 'react'

export default function PokeInfo() {
    const [pokemon, setPokemon] = useState<any>();
    const [id, setId] = useState<number>(1);

    const handleAnterior = () => {
        if (id > 1) {
            setId(id - 1);
        }
    }

    const handleSiguiente = () => {
        setId(id + 1);
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((resp) => {
            return resp.json()
        })
            .then((data) => {
                console.log(data)
                setPokemon(data);
            })
    }, [id])


    return (
        <div>
            PokeAPI
            <br />
            {pokemon &&
                <div>
                    <h2>{pokemon.name}</h2>
                    <p>Id: {pokemon.id}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <br />
                    {id > 1 ? <button onClick={handleAnterior}>Anterior</button> : <button disabled>Anterior</button>}
                    <button onClick={handleSiguiente}>Siguiente</button>
                </div>
            }
        </div>
    )
}
