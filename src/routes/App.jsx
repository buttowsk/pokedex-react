import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { Moves } from '../pages/Moves';
import { Abilities } from '../pages/Abilities';
import { Items } from '../pages/Items';
import { Locations } from '../pages/Locations';
import {useAllPokemons} from "../hooks/useAllPokemons/index.js";
import {LoadingComponent} from "../components/LoadingComponent/index.jsx";
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
    const {pokemons, loading} = useAllPokemons('https://pokeapi.co/api/v2/pokemon?limit=81&offset=0');
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        const getPokeInfo = async () => {
            const pokeInfo = await Promise.all(pokemons.map(async (pokemon) => {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                return data;
            }));
            setPokeList(pokeInfo);
        }
        getPokeInfo();
    }, [pokemons]);


    if (loading || !pokemons || !pokeList) {
        return <LoadingComponent />;
    }

    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex allPokemonsInfo={pokeList}/>} />
                <Route path="/moves" element={<Moves />} />
                <Route path="/abilities" element={<Abilities />} />
                <Route path="/items" element={<Items />} />
                <Route path="/locations" element={<Locations />} />
            </Routes>
    )
}
export default App
