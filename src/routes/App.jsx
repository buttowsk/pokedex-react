import { Routes, Route } from 'react-router-dom';
import { Home, Pokedex, Login, PokePage, Items, NotFound, Favorites } from '../pages';
import PrivateRoutes from './PrivateRoutes.jsx';
import { AuthorizationProvider } from '../context/authorization.jsx';

function App() {
  return (
    <AuthorizationProvider>
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
    </AuthorizationProvider>
  );
}

export default App;