import React, {useEffect, useState} from 'react';
import './App.css';
import TopMenu from "./components/TopMenu";
import Pokemon from "./pages/Pokemon";
import axios from "axios";

function App() {
    const [namePokemon, setNamePokemon] = useState([]);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`);
    function next(){
        setEndpoint(namePokemon.next);
    }
    function previous(){
        setEndpoint(namePokemon.previous);
    }

    useEffect(() => {
        async function pokemonLink() {
            try {
                const res = await axios.get(`${endpoint}`);
                setNamePokemon(res.data);
            } catch (e) {
                console.error(e);
            }
        }
        pokemonLink();
    }, [endpoint])

  return (
    <div>
      <TopMenu dis={!namePokemon.previous} disPlus={!namePokemon.next} next={next} previous={previous}/>
        {namePokemon.results && namePokemon.results.map((poke)=>{
            return <Pokemon url={poke.url} name={poke.name} key={poke.name} />
        })}
    </div>
  );
}

export default App;
