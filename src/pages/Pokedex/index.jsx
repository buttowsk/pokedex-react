import {Title, List, Container,Content, TopRow, BackIcon, MenuIcon } from './styles'
import { PokeCard } from '../../components/PokeCard/index.jsx'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';

export const Pokedex = ({ pokeList, setPage, loading, hasMore }) => {
  const navigate = useNavigate();
  const pokeArray = Object.values(pokeList);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollBottom = documentHeight - (scrollTop + windowHeight);
    if (scrollBottom <= 0.8 * windowHeight) {
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);


  const handleCardClick = () => {
    localStorage.setItem("scrollPosition", document.documentElement.scrollTop);
  };

  if (loading || !pokeList) {
    return <LoadingComponent />;
  }

  return (
    <Container>
      <TopRow>
        <BackIcon onClick={() => navigate('/')} />
        <Title>Pokedex</Title>
        <MenuIcon />
      </TopRow>
      <Content>
        <List>
          {pokeArray.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} pokeList={pokeArray} onClick={() => handleCardClick()} />
          ))}
        </List>
      </Content>
    </Container>
  );
};