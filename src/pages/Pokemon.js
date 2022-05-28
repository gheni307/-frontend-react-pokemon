import React, {useEffect, useState} from 'react';
import '../App.css'
import axios from "axios";

function Pokemon({url}) {
    const [namePokemon, setNamePokemon] = useState([]);

    useEffect(() => {
        async function pokemonLink() {
            try {
                const res = await axios.get(`${url}`);
                setNamePokemon(res.data);
                console.log(res.data)
            } catch (e) {
                console.error(e);
            }
        }
        pokemonLink();
    }, [])

    return (
        <div className="pokemons">
        <div className="pokemon">
            {
                Object.keys(namePokemon).length > 0 && <>

                    <h3>weight:{namePokemon.name}</h3>
                    <img src={namePokemon.sprites.front_default} className="fotoOfImg" alt={namePokemon.name}/>
                    <h3>moves:{namePokemon.moves.length}</h3>
                    <h3>weight:{namePokemon.weight}</h3>
                    {namePokemon.abilities.map((ab)=>{
                        return <p key={ab.ability.name}>{ab.ability.name}</p>
                    })}
                </>
            }


        </div>
        </div>
    );
}

export default Pokemon;