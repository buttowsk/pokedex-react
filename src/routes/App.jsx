import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { Moves } from '../pages/Moves';
import { Abilities } from '../pages/Abilities';
import { Items } from '../pages/Items';
import { Locations } from '../pages/Locations';
import { NotFound } from '../pages/NotFound';
import {useAllPokemons} from "../hooks/useAllPokemons/index.js";
function App() {

    const {pokemons, loading} = useAllPokemons('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');


    if (loading || !pokemons) {
        return <div>Loading...</div>;
    }

    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex pokemons={pokemons}/>} />
                <Route path="/moves" element={<Moves />} />
                <Route path="/abilities" element={<Abilities />} />
                <Route path="/items" element={<Items />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    )
}
export default App
