import {Title, List, Container,Content, TopRow, BackIcon, MenuIcon } from './styles'
import { PokeCard } from '../../components/PokeCard/index.jsx'
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { useEffect, useState } from 'react';
import { useAllPokemons } from '../../hooks/useAllPokemons/index.js';

export const Pokedex = () => {
  const { loading, pokeList, fetchMorePokemons } = useAllPokemons();
  const [visiblePokeList, setVisiblePokeList] = useState([]);
  const [loadedPokemons, setLoadedPokemons] = useState(20);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    setVisiblePokeList(pokeList.slice(0, 20));
  }, [pokeList]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop + windowHeight >= documentHeight) {
        setIsLoadingMore(true);
        setLoadedPokemons((prev) => prev + 20);
        fetchMorePokemons().then(() => {
          setIsLoadingMore(false);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMorePokemons]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <Container>
      <TopRow>
        <BackIcon />
        <MenuIcon />
      </TopRow>
      <Content>
        <Title>Pokedex</Title>
        <List>
          {pokeList.slice(0, loadedPokemons).map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} pokeList={pokeList} />
          ))}
          {isLoadingMore && <LoadingComponent />}
        </List>
      </Content>
    </Container>
  );
};