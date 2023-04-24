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
  ElementsRow, TypeText, FavoriteButton,
} from './styles.js';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../globalStyles/styles.js';
import { PokeAbout } from '../../components/PokeAbout/index.jsx';
import { PokeStats } from '../../components/PokeStats/index.jsx';
import { PokeEvolutions } from '../../components/PokeEvolutions/index.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { useColors } from '../../hooks/useColors/index.js';
import { dbApi } from '../../services/dbApi.js';

export const PokePage = ({ pokeList, pokeSearch }) => {
  const { pokemon } = useParams();
  const pokeArray = Object.values(pokeList);
  const navigate = useNavigate();
  const { useGetBgColor, getTextColor } = useColors();
  const [selectedPage, setSelectedPage] = useState('about');
  const [poke, setPoke] = useState({});
  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    async function getPokeData() {
      let newPoke;
      if (pokeArray.find(poke => poke.name === pokemon)) {
        newPoke = pokeArray.find(poke => poke.name === pokemon);
      } else {
        newPoke = await pokeSearch(pokemon);
      }
      setPoke(newPoke);
    }

    getPokeData();
  }, [pokemon]);

  const bgColor = useGetBgColor(poke.image);
  const color = getTextColor(bgColor);
  const handlePageTitleClick = (page) => {
    setSelectedPage(page);
  };

  useEffect(() => {
    sessionStorage.setItem('poke', JSON.stringify(poke));
  }, [poke]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const pokemon = JSON.parse(sessionStorage.getItem('poke'));
    if (token) {
      const checkFavorite = async () => {
        const { data } = await dbApi.get('/get-user-id');
        if (data && pokemon && pokemon.id) {
          const response = await dbApi.get(`/users/${ data.user_id }/favorites/pokemon/${ pokemon.id }`);
          if (response.status === 200 && response.data.favorite_pokemon.pokemon_name === pokemon.name) {
            setIsFavorite('true');
            console.log(response);
          } else {
            setIsFavorite('false');
          }
        }
      };
      checkFavorite();
    }
  }, [pokemon, poke]);

  const AddFavorite = async () => {
    const { data } = await dbApi.get('/get-user-id');

    if (data) {
      const response = await dbApi.post(`/users/${ data.user_id }/favorites/pokemon`, {
        'pokemon_name': `${ poke.name }`,
        'pokemon_id': `${ poke.id }`,
      });
      if (response.status === 200) {
        setIsFavorite('true');
      }
    }
  };

  const RemoveFavorite = async () => {
    const { data } = await dbApi.get('/get-user-id');
    const token = localStorage.getItem('token');

    if (data) {
      const response = await dbApi.delete(`/users/${ data.user_id }/favorites/pokemon/${ poke.id }`);
      if (response.status === 200) {
        setIsFavorite('false');
      }
    }
  };

  const handleFavoriteClick = () => {
    if (isFavorite === 'true') {
      RemoveFavorite();
    } else {
      AddFavorite();
    }
  };


  if (!bgColor || !color || !poke || isFavorite === null) {
    return <LoadingComponent/>;
  }

  const theme = themes[poke.types[0]];

  return (
    <ThemeProvider theme={ theme }>
      <Container bg={ bgColor } textColor={ color }>
        <BackButton onClick={ () => navigate('/pokedex') }/>
        <FirstColumn>
          <IdText>#{ poke.id }</IdText>
          <NameText>{ poke.name } <FavoriteButton onClick={ handleFavoriteClick } favorite={ isFavorite }/></NameText>
          <ElementsRow>
            <TypeText theme={ themes[poke.types[0]] }>{ poke.types[0] }</TypeText>
            { poke.types[1] && <TypeText theme={ themes[poke.types[1]] }>{ poke.types[1] }</TypeText> }
          </ElementsRow>
          <PokeImage src={ poke.image }/>
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
      </Container>
    </ThemeProvider>
  );
};