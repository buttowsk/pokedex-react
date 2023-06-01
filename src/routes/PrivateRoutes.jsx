import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonsProvider } from '../context/pokemons.jsx';
import { ItemsProvider } from '../context/items.jsx';
import { FavoritesProvider } from '../context/favorites.jsx';
import { AuthorizationContext } from '../context/authorization.jsx';
import { LoadingComponent } from '../components/LoadingComponent/index.jsx';

function PrivateRoutes({ element, ...rest }) {
  const { isAuthorized } = useContext(AuthorizationContext);

  console.log('isAuthorized', isAuthorized)

  if (isAuthorized === null) {
    return <LoadingComponent/>;
  }

  if (isAuthorized) {
    return (
      <FavoritesProvider>
        <ItemsProvider>
          <PokemonsProvider>
            <Outlet/>
          </PokemonsProvider>
        </ItemsProvider>
      </FavoritesProvider>
    );
  } else {
    return <Navigate to="/login"/>;
  }
}

export default PrivateRoutes;