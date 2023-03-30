import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { Moves } from '../pages/Moves';
import { Abilities } from '../pages/Abilities';
import { Items } from '../pages/Items';
import { Locations } from '../pages/Locations';
import {useAllPokemons} from "../hooks/useAllPokemons/index.js";
import {LoadingComponent} from "../components/LoadingComponent/index.jsx";
import {PokeModalTeste} from "../components/PokeModalTeste/index.jsx";
function App() {

    const {pokemons, loading} = useAllPokemons('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0');


    if (loading || !pokemons) {
        return <LoadingComponent />;
    }

    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex pokemons={pokemons}/>} />
                <Route path="/moves" element={<Moves />} />
                <Route path="/abilities" element={<Abilities />} />
                <Route path="/items" element={<Items />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/teste" element={<PokeModalTeste />} />
            </Routes>
    )
}
export default App
