import {Title, List, Container,Content, TopRow, BackIcon, MenuIcon } from './styles'
import { PokeCard } from '../../components/PokeCard/index.jsx'
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { useEffect, useState } from 'react';
import { useAllPokemons } from '../../hooks/useAllPokemons/index.js';

export const Pokedex = ({ pokeList }) => {
  const [visiblePokeList, setVisiblePokeList] = useState([]);
  const [loadedPokemons, setLoadedPokemons] = useState(20);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    setVisiblePokeList(pokeList.slice(0, loadedPokemons));
  }, [pokeList, loadedPokemons]);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop + windowHeight >= documentHeight) {
      setIsLoadingMore(true);
      setLoadedPokemons((prev) => prev + 20);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isLoadingMore) {
      setVisiblePokeList(pokeList.slice(0, loadedPokemons));
      setIsLoadingMore(false);
    }
  }, [pokeList, loadedPokemons, isLoadingMore]);

  return (
    <Container>
      <TopRow>
        <BackIcon />
        <MenuIcon />
      </TopRow>
      <Content>
        <Title>Pokedex</Title>
        <List>
          {visiblePokeList.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} pokeList={pokeList} />
          ))}
          {isLoadingMore && <LoadingComponent />}
        </List>
      </Content>
    </Container>
  );
};