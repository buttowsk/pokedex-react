import {
  PokeImage,
  IdText,
  NameText,
  Container,
  MenuItem,
  MenuRow,
  FirstColumn,
  SecondColumn,
  BackButton,
  ElementsRow,
  TypeText,
  FavoriteButton,
  ShinyButton,
  AddFavoriteSuccess,
  AddFavoriteSuccessText,
  RemoveFavoriteSuccess,
  RemoveFavoriteSuccessText,
} from './styles.js';
import { useEffect, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../utils/globalStyles/styles.js';
import { PokeAbout } from '../../components/PokeAbout/index.jsx';
import { PokeStats } from '../../components/PokeStats/index.jsx';
import { PokeEvolutions } from '../../components/PokeEvolutions/index.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { useColors } from '../../hooks/useColors/index.js';
import { FavoritesContext } from '../../context/favorites.jsx';
import { PokemonsContext } from '../../context/pokemons.jsx';

export const PokePage = () => {
  const { favorites, addFavorite, removeFavorite, isFavorite, userId } = useContext(FavoritesContext);
  const { getPokemonByName, pokeList } = useContext(PokemonsContext);
  const { pokemon } = useParams();
  const pokeArray = Object.values(pokeList);
  const navigate = useNavigate();
  const { getBgColor, getTextColor } = useColors();
  const [selectedPage, setSelectedPage] = useState('about');
  const [poke, setPoke] = useState({});
  const [favorite, setFavorite] = useState(null);
  const [shiny, setShiny] = useState(false);
  const bgColor = getBgColor(shiny ? poke.shinyImage : poke.image);
  const color = getTextColor(bgColor);
  const [addFavStatus, setAddFavStatus] = useState(false);
  const [removeFavStatus, setRemoveFavStatus] = useState(false);

  console.log(userId);

  useEffect(() => {
    async function getPokeData() {
      let newPoke;
      if (pokeArray.find(poke => poke.name === pokemon)) {
        newPoke = pokeArray.find(poke => poke.name === pokemon);
      } else {
        newPoke = await getPokemonByName(pokemon);
      }
      setPoke(newPoke);
    }

    getPokeData();
  }, [pokemon]);

  const handlePageTitleClick = (page) => {
    setSelectedPage(page);
  };

  useEffect(() => {
    sessionStorage.setItem('poke', JSON.stringify(poke));
  }, [poke]);


  useEffect(() => {
    if (isFavorite(poke)) {
      setFavorite('true');
    } else {
      setFavorite('false');
    }
  }, [favorites, poke]);

  const handleFavoriteClick = () => {
    if (favorite === 'true') {
      removeFavorite(poke, userId);
      setRemoveFavStatus(true);
    } else {
      addFavorite(poke, userId);
      setAddFavStatus(true);
    }
  };

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const handleShinyClick = () => {
    setShiny(!shiny);
  };

  if (!bgColor || !color || !poke || favorite === null) {
    return <LoadingComponent/>;
  }

  const theme = themes[poke.types[0]];

  return (
    <ThemeProvider theme={ theme }>
      <Container bg={ bgColor } textColor={ color }>
        <BackButton onClick={ () => navigate(-1) }/>
        <FirstColumn>
          <IdText>#{ poke.id }</IdText>
          <NameText>{ poke.name } <FavoriteButton onClick={ handleFavoriteClick } favorite={ favorite }/></NameText>
          <ElementsRow>
            <TypeText theme={ themes[poke.types[0]] }>{ poke.types[0] }</TypeText>
            { poke.types[1] && <TypeText theme={ themes[poke.types[1]] }>{ poke.types[1] }</TypeText> }
          </ElementsRow>
          <PokeImage src={ shiny ? poke.shinyImage : poke.image }/>
          <ShinyButton onClick={ handleShinyClick }>{ shiny ? 'Default' : 'Shiny' }</ShinyButton>
        </FirstColumn>
        <SecondColumn selectedPage={ selectedPage }>
          <MenuRow>
            <MenuItem page={ selectedPage === 'about' ? 'selected' : '' }
                      onClick={ () => handlePageTitleClick('about') }>About</MenuItem>
            <MenuItem page={ selectedPage === 'stats' ? 'selected' : '' }
                      onClick={ () => handlePageTitleClick('stats') }>Stats</MenuItem>
            <MenuItem page={ selectedPage === 'evolutions' ? 'selected' : '' }
                      onClick={ () => handlePageTitleClick('evolutions') }>Evolutions</MenuItem>
          </MenuRow>
          { selectedPage === 'about' && <PokeAbout poke={ poke }/> }
          { selectedPage === 'stats' && <PokeStats poke={ poke }/> }
          { selectedPage === 'evolutions' && <PokeEvolutions poke={ poke } textColor={ color }/> }
        </SecondColumn>
        { addFavStatus && setTimeout(() => setAddFavStatus(false), 2000) &&
          <AddFavoriteSuccess>
            <AddFavoriteSuccessText>Added to favorites!</AddFavoriteSuccessText>
          </AddFavoriteSuccess> }
        { removeFavStatus && setTimeout(() => setRemoveFavStatus(false), 2000) &&
          <RemoveFavoriteSuccess>
            <RemoveFavoriteSuccessText>Removed from favorites!</RemoveFavoriteSuccessText>
          </RemoveFavoriteSuccess> }
      </Container>
    </ThemeProvider>
  );
};