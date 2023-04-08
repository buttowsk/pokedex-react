import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { Items } from '../pages/Items';
import { PokePage } from '../pages/PokePage';
import { useAllPokemons } from '../hooks/useAllPokemons/index.js';
import { LoadingComponent } from '../components/LoadingComponent/index.jsx';
import { useAllItems } from '../hooks/useAllItems/index.js';


function App() {
  const { items, hasMoreItems, setItemsPage, itemsLoading } = useAllItems();
  const { isLoading, pokeList, hasMorePoke, setPokePage } = useAllPokemons();

  if (isLoading || !pokeList || pokeList.length === 0 || !items) {
    return <LoadingComponent/>
  }

  return (
    <Routes>
      <Route path="/" element={<Home pokeList={pokeList}/>} />
      <Route path="/pokedex" element={<Pokedex pokeList={pokeList} hasMore={hasMorePoke} setPage={setPokePage} loading={isLoading} />} />
      <Route path="/items" element={<Items items={items} hasMore={hasMoreItems} setPage={setItemsPage} loading={itemsLoading} />} />
      <Route path="/pokedex/:pokemon" element={<PokePage pokeList={pokeList}/>} />
    </Routes>
  )
}
export default App
