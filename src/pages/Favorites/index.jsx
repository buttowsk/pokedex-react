import { FavoritesContext } from '../../contexts/favorites.jsx';
import { useContext, useEffect, useRef, useState } from 'react';
import { Container, Title, Content, PokemonsList, ItemsList, Arrow, PokemonsContainer } from './styles.js';
import { PokeCard } from '../../components/PokeCard/index.jsx';
import { ItemCard } from '../../components/ItemCard/index.jsx';
import { ScrollBackComponent } from '../../components/ScrollBackComponent/index.jsx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Header } from '../../components/Header/index.jsx';
import { dbApi } from '../../services/dbApi.js';

export const Favorites = () => {
  const { getPokemons, getItems, favorites } = useContext(FavoritesContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    dbApi.get('/get-user-id')
      .then(({ data }) => {
        const { user_id } = data;
        getPokemons(user_id);
        getItems(user_id);
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    const container = containerRef.current;
    setContainerWidth(container.offsetWidth);
    setContentWidth(container.scrollWidth);
  }, [favorites]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [containerWidth, contentWidth]);

  useEffect(() => {
    if (containerWidth >= contentWidth) {
      setShowRightArrow(false);
    } else {
      setShowRightArrow(true);
    }
  }, [containerWidth, contentWidth]);

  const handleScroll = () => {
    const container = containerRef.current;
    const position = container.scrollLeft;
    setScrollPosition(position);

    if (position === 0) {
      setShowLeftArrow(false);
    } else {
      setShowLeftArrow(true);
    }

    if (position >= contentWidth - containerWidth) {
      setShowRightArrow(false);
    } else {
      setShowRightArrow(true);
    }
  };

  const handleArrowClick = (direction) => {
    const container = containerRef.current;
    const increment = direction === 'right' ? 800 : -800;
    container.scrollBy({ left: increment, behavior: 'smooth' });
  };


  return (
    <Container>
      <Header currentPage={ 'favorites' }/>
      <Content>
        <ScrollBackComponent/>
        <Title>Favorite Pokemons</Title>
        <PokemonsContainer>
          <Arrow direction="left" onClick={ () => handleArrowClick('left') } show={ showLeftArrow }>
            <IoIosArrowBack/>
          </Arrow>
          <PokemonsList ref={ containerRef } onScroll={ handleScroll }>
            { favorites.pokemons.map((pokemon, index) => (
              <PokeCard key={ index } pokemon={ pokemon }/>
            )) }
          </PokemonsList>
          <Arrow direction="right" onClick={ () => handleArrowClick('right') } show={ showRightArrow }>
            <IoIosArrowForward/>
          </Arrow>
        </PokemonsContainer>
        <Title>Favorite Items</Title>
        <ItemsList>
          { favorites.items.map((item, index) => (
            <ItemCard key={ index } item={ item }/>
          )) }
        </ItemsList>
      </Content>
    </Container>
  );
};