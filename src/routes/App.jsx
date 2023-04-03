import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { Moves } from '../pages/Moves';
import { Abilities } from '../pages/Abilities';
import { Items } from '../pages/Items';
import { Locations } from '../pages/Locations';

function App() {

    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/moves" element={<Moves />} />
                <Route path="/abilities" element={<Abilities />} />
                <Route path="/items" element={<Items />} />
                <Route path="/locations" element={<Locations />} />
            </Routes>
    )
}
export default App
