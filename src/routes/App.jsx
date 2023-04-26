import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { Items } from '../pages/Items';
import { PokePage } from '../pages/PokePage';
import { NotFound } from '../pages/NotFound/index.jsx';
import { useAllPokemons } from '../hooks/useAllPokemons/index.js';
import { LoadingComponent } from '../components/LoadingComponent/index.jsx';
import { useAllItems } from '../hooks/useAllItems/index.js';
import { Login } from '../pages/Login';
import PrivateRoutes from './PrivateRoutes.jsx';
import { Favorites } from '../pages/Favorites/index.jsx';
import { FavoritesProvider } from '../contexts/favorites.jsx';

function App() {
  const { items, hasMoreItems, setItemsPage, itemsLoading } = useAllItems();
  const { pokeList, hasMorePoke, setPokePage, isLoading, getPokemonByName } = useAllPokemons();


  if (isLoading || !pokeList || pokeList.length === 0 || !items) {
    return <LoadingComponent/>;
  }

  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="*" element={ <NotFound/> }/>
        <Route element={ <PrivateRoutes/> }>
          <Route path="/" element={ <Home pokeList={ pokeList }/> }/>
          <Route path="/pokedex"
                 element={ <Pokedex pokeList={ pokeList } hasMore={ hasMorePoke } setPage={ setPokePage }
                                    loading={ isLoading }/> }/>
          <Route path="/items" element={ <Items items={ items } hasMore={ hasMoreItems } setPage={ setItemsPage }
                                                loading={ itemsLoading }/> }/>
          <Route path="/pokedex/:pokemon"
                 element={ <PokePage pokeList={ pokeList } pokeSearch={ getPokemonByName }/> }/>
          <Route path="/favorites" element={ <Favorites/> }/>
        </Route>
      </Routes>
    </FavoritesProvider>
  );
}

export default App;