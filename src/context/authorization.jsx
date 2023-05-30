import { createContext, useCallback, useEffect, useState } from 'react';
import { dbApi } from '../services/dbApi.js';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthorizationContext = createContext();

export const AuthorizationProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const verifyToken = useCallback(async (token) => {
    try {
      const response = await dbApi.get('/check-token', { headers: { Authorization: `Bearer ${ token }` } });
      if (response.status === 200) {
        localStorage.setItem('token', token);
        dbApi.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
        const getNameResponse = await dbApi.get('/get-name');
        if (getNameResponse.status === 200) {
          localStorage.setItem('name', getNameResponse.data.name);
          setIsAuthorized(true);
          if (location.pathname === '/login') {
            navigate('/');
          }
        }
      }
    } catch (error) {
      console.log(error)
      setIsAuthorized(false);
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      if (location.pathname !== '/login') {
        navigate('/login');
      }
    }
  }, [token]);

  const authorized = useCallback(async () => {
    const urlToken = params.get('token');
    try {
      if (urlToken) {
        await verifyToken(urlToken);
        navigate('/');
      }
    } catch (error) {
      setIsAuthorized(false);
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      navigate('/login')
    }
  }, [params, verifyToken, navigate, token]);

  useEffect(() => {
    if (token) {
      verifyToken(token);
    } else {
      authorized();
    }
  }, [token, verifyToken]);

  return (
    <AuthorizationContext.Provider value={ { isAuthorized, setIsAuthorized } }>
      { children }
    </AuthorizationContext.Provider>
  );

};