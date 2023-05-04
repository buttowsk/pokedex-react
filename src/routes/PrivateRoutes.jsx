import { Navigate, Outlet } from 'react-router-dom';
import { dbApi } from '../services/dbApi.js';
import { useEffect, useState } from 'react';
import { LoadingComponent } from '../components/LoadingComponent/index.jsx';
import { PokemonsProvider } from '../contexts/pokemons.jsx';
import { ItemsProvider } from '../contexts/items.jsx';

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
        })
        .catch((error) => {
          setIsAuthorized(false);
          console.log(error);
        });
    } else {
      setIsAuthorized(false);
    }
  }, []);

  if (isAuthorized === null) {
    return <LoadingComponent/>;
  } else if (isAuthorized) {
    return (
      <ItemsProvider>
        <PokemonsProvider>
          <Outlet/>
        </PokemonsProvider>
      </ItemsProvider>
    );
  } else {
    return <Navigate to="/login"/>;
  }
}

export default PrivateRoutes;