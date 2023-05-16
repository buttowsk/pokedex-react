import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { Items } from '../pages/Items';
import { PokePage } from '../pages/PokePage';
import { NotFound } from '../pages/NotFound/index.jsx';
import { Login } from '../pages/Login';
import PrivateRoutes from './PrivateRoutes.jsx';
import { Favorites } from '../pages/Favorites/index.jsx';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login/> }/>
      <Route path="*" element={ <NotFound/> }/>
      <Route element={ <PrivateRoutes/> }>
        <Route path="/" element={ <Home/> }/>
        <Route path="/pokedex" element={ <Pokedex/> }/>
        <Route path="/items" element={ <Items/> }/>
        <Route path="/pokedex/:pokemon" element={ <PokePage/> }/>
        <Route path="/favorites" element={ <Favorites/> }/>
      </Route>
    </Routes>
  );
}

export default App;