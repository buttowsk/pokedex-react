import {
  List,
  Container,
  Content,
  DivLoadMore,
} from './styles';
import { PokeCard } from '../../components/PokeCard/index.jsx';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { ScrollBackComponent } from '../../components/ScrollBackComponent/index.jsx';
import { Header } from '../../components/Header/index.jsx';

export const Pokedex = ({ pokeList, setPage, loading, hasMore }) => {
  const [pokeArray, setPokeArray] = useState(Object.values(pokeList));
  const loaderRef = useRef(null);

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
      <Header currentPage={'pokedex'}/>
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