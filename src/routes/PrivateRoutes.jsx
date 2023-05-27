import { Navigate, Outlet } from 'react-router-dom';
import { dbApi } from '../services/dbApi.js';
import { useEffect, useState } from 'react';
import { LoadingComponent } from '../components/LoadingComponent/index.jsx';
import { PokemonsProvider } from '../context/pokemons.jsx';
import { ItemsProvider } from '../context/items.jsx';
import { FavoritesProvider } from '../context/favorites.jsx';

function PrivateRoutes({ element, ...rest }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dbApi.get('/check-token', { headers: { Authorization: `Bearer ${ token }` } })
        .then((response) => {
          if (response.status === 200) {
            dbApi.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
            dbApi.get('/get-name').then((response) => {
              localStorage.setItem('name', response.data.name);
              setIsAuthorized(true);
            });
          } else {
            setIsAuthorized(false);
          }
        });
    } else if (!token) {
      const params = new URLSearchParams(location.search);
      const url_token = params.get('token');
      if (url_token) {
        localStorage.setItem('token', url_token);
        dbApi.defaults.headers.common['Authorization'] = `Bearer ${ url_token }`;
        window.location.href = 'https://buttowsk.github.io/pokedex-react/';
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } else {
      setIsAuthorized(false);
    }
  }, []);

  if (isAuthorized === null) {
    return <LoadingComponent/>;
  } else if (isAuthorized) {
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