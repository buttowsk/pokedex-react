import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { Moves } from '../pages/Moves';
import { Abilities } from '../pages/Abilities';
import { Items } from '../pages/Items';
import { Locations } from '../pages/Locations';
import { PokePage } from '../pages/PokePage';
import { useAllPokemons } from '../hooks/useAllPokemons/index.js';
import { LoadingComponent } from '../components/LoadingComponent/index.jsx';
import { useEffect, useState } from 'react';

function App() {
  const {isLoading, pokeList} = useAllPokemons();
  const [isPokeListLoaded, setIsPokeListLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading && pokeList) {
      setIsPokeListLoaded(true);
    }
  }, [isLoading, pokeList]);

  if (isLoading || !isPokeListLoaded) {
    return <LoadingComponent/>
  }
  return (
    <Routes>
      <Route path="/" element={<Home pokeList={pokeList}/>} />
      <Route path="/pokedex" element={<Pokedex pokeList={pokeList} />} />
      <Route path="/moves" element={<Moves />} />
      <Route path="/abilities" element={<Abilities />} />
      <Route path="/items" element={<Items />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/pokedex/:pokemon" element={<PokePage pokeList={pokeList} />} />
    </Routes>
  )
}
export default App
