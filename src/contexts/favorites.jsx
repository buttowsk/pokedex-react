import { createContext, useCallback, useEffect, useState } from 'react';
import { Item } from '../models/Item/index.js';
import { Pokemon } from '../models/Pokemon/index.js';
import { dbApi } from '../services/dbApi.js';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (!token) return console.log('User not logged in');
    dbApi.get('/get-user-id', { headers: { Authorization: `Bearer ${ token }` } })
      .then(({ data }) => {
        const { user_id } = data;
        console.log(user_id);
        setUserId(user_id);
      })
      .catch((err) => console.log(err));
  }, [token, userId]);

  const getPokemons = useCallback(async () => {
    if (!token) return console.log('User not logged in');
    try {
      const { data } = await dbApi.get(`/users/${ userId }/favorites/pokemons`);
      const { favorite_pokemons } = data;

      const typesArray = (types) => {
        let array = types.replace(/'/g, '"');
        return JSON.parse(array);
      };

      const favoritePokemons = favorite_pokemons.map((pokemon) =>
        new Pokemon(
          pokemon.name,
          typesArray(pokemon.types),
          pokemon.image,
          pokemon.pokemon_id,
        ));
      setFavoritePokemons(favoritePokemons);
    } catch (err) {
      console.log(err);
    }
  }, [token, userId]);

  const getItems = useCallback(async () => {
    if (!token) return console.log('User not logged in');
    try {
      const { data } = await dbApi.get(`/users/${ userId }/favorites/items`);
      const { favorite_items } = data;
      const favoriteItems = favorite_items.map((item) => new Item(
        item.name,
        item.image,
        item.item_id,
        item.description,
        item.cost,
        item.held_by_pokemon,
        item.category,
      ));
      setFavoriteItems(favoriteItems);
    } catch (err) {
      console.log(err);
    }

  }, [userId]);

  useEffect(() => {
    if (userId) {
      getPokemons().then(r => console.log('consolelog do useEffect', r));
      getItems().then(r => console.log('consolelog do useEffect', r));
    }
  }, [userId]);

  const favorites = {
    pokemons: favoritePokemons,
    items: favoriteItems,
  };

  const addFavorite = (favorite) => {
    if (favorite instanceof Pokemon) {
      setFavoritePokemons((prevFavorites) => [...prevFavorites, favorite]);
      dbApi.post(`/users/${ userId }/favorites/pokemon`, {
        pokemon_id: favorite.id,
        name: favorite.name,
        image: favorite.image,
        types: favorite.types,
      }).then(r => console.log(r));
    } else if (favorite instanceof Item) {
      setFavoriteItems((prevFavorites) => [...prevFavorites, favorite]);
      dbApi.post(`/users/${ userId }/favorites/item`, {
        name: favorite.name,
        item_id: favorite.id,
        description: favorite.description,
        cost: favorite.cost,
        image: favorite.image,
        held_by_pokemon: favorite.held_by_pokemon,
        category: favorite.category,
      }).then(r => console.log(r));
    }
  };

  const removeFavorite = (favorite) => {
    if (favorite instanceof Pokemon) {
      setFavoritePokemons((prevFavorites) => prevFavorites.filter((fav) => fav.id !== favorite.id));
      dbApi.delete(`/users/${ userId }/favorites/pokemon/${ favorite.id }`).then(r => console.log(r));
    } else if (favorite instanceof Item) {
      setFavoriteItems((prevFavorites) => prevFavorites.filter((fav) => fav.id !== favorite.id));
      dbApi.delete(`/users/${ userId }/favorites/item/${ favorite.id }`).then(r => console.log(r));
    }
  };

  const isFavorite = (favorite) => {
    if (favorite instanceof Pokemon) {
      return favoritePokemons.some((fav) => fav.name === favorite.name);
    } else if (favorite instanceof Item) {
      return favoriteItems.some((fav) => fav.name === favorite.name);
    }
  };

  const contextValue = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };


  return (
    <FavoritesContext.Provider value={ contextValue }>
      { children }
    </FavoritesContext.Provider>
  );
};

