import {
  List,
  Container,
  Content,
  DivLoadMore,
} from './styles';
import { PokeCard } from '../../components/PokeCard/index.jsx';
import { useContext, useEffect, useRef, useState } from 'react';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { ScrollBackComponent } from '../../components/ScrollBackComponent/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { PokemonsContext } from '../../context/pokemons.jsx';
import { FavoritesContext } from '../../context/favorites.jsx';
import { dbApi } from '../../services/dbApi.js';

export const Pokedex = () => {
  const { pokeList, hasMorePoke: hasMore, setPokePage: setPage, isLoading: loading } = useContext(PokemonsContext);
  const { setUserId } = useContext(FavoritesContext);
  const [pokeArray, setPokeArray] = useState(Object.values(pokeList));
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await dbApi.get('/get-user-id');
        const { user_id } = data;
        setUserId(user_id);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setUserId]);

  useEffect(() => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      document.documentElement.scrollTop = scrollPosition;
      localStorage.removeItem('scrollPosition');
    }
  }, []);

  useEffect(() => {
    setPokeArray(Object.values(pokeList));
  }, [pokeList]);


  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loaderRef, hasMore, setPage]);

  const handleCardClick = () => {
    localStorage.setItem('scrollPosition', document.documentElement.scrollTop);
  };

  if (loading || !pokeList) {
    return <LoadingComponent/>;
  }

  return (
    <Container>
      <Header currentPage={ 'pokedex' }/>
      <Content>
        <ScrollBackComponent/>
        <List>
          { pokeArray.map((pokemon) => (
            <PokeCard key={ pokemon.id } pokemon={ pokemon } onClick={ handleCardClick }/>
          )) }
        </List>
        { !loading && <DivLoadMore ref={ loaderRef }><LoadingComponent scrollLoading={ true }/></DivLoadMore> }
      </Content>
    </Container>
  );
};