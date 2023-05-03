import {
  ItemCardContainer,
  ItemName,
  ItemDescription,
  ItemPrice,
  ItemImage,
  ItemDescriptionContainer,
  ItemPriceContainer, FavoriteButton, DivAddSucefull, TextAddSucefull,
  DivRemoveSucefull, TextRemoveSucefull, HeldBy, HeldByContainer, PokemonImage,
} from './styles.js';
import { useColors } from '../../hooks/useColors/index.js';
import { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../../contexts/favorites.jsx';
import { useNavigate } from 'react-router-dom';
import { LoadingComponent } from '../LoadingComponent/index.jsx';

export const ItemCard = ({ item }) => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const { getBgColor, getTextColor } = useColors();
  const bgColor = getBgColor(item.image);
  const textColor = getTextColor(bgColor);
  const [favorite, setFavorite] = useState(null);
  const [addFavStatus, setAddFavStatus] = useState(false);
  const [removeFavStatus, setRemoveFavStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isFavorite(item)) {
      setFavorite('true');
    } else {
      setFavorite('false');
    }
  }, [favorites, item]);

  const handleFavoriteClick = () => {
    if (favorite === 'true') {
      removeFavorite(item);
      setRemoveFavStatus(true);
    } else {
      addFavorite(item);
      setAddFavStatus(true);
    }
  };

  const handleHeldByClick = (pokemon) => {
    navigate(`/pokedex/${ pokemon }`);
  };

  if (!bgColor) {
    return <LoadingComponent/>;
  }

  return (
    <>
      <ItemCardContainer bg={ bgColor } color={ textColor }>
        <FavoriteButton onClick={ handleFavoriteClick } favorite={ favorite }/>
        <ItemImage src={ item.image } alt={ item.name }/>
        <ItemName>{ item.name }</ItemName>
        <ItemDescriptionContainer>
          <ItemDescription>{ item.description }</ItemDescription>
        </ItemDescriptionContainer>
        <ItemPriceContainer>
          <ItemPrice>$ { item.cost }</ItemPrice>
        </ ItemPriceContainer>
        { item.heldByPokemon.length > 0 &&
          <HeldByContainer>
            <HeldBy>Held by:</HeldBy>
            { item.heldByPokemon.map((pokemon, index) => (
              <PokemonImage key={ index } src={ pokemon.image } alt={ pokemon.name }
                            onClick={ () => handleHeldByClick(pokemon.name) }/>
            )) }
          </HeldByContainer>
        }
      </ItemCardContainer>
      { addFavStatus && setTimeout(() => setAddFavStatus(false), 2000)
        && <DivAddSucefull>
          <TextAddSucefull>Item adicionado aos favoritos</TextAddSucefull>
        </DivAddSucefull> }
      { removeFavStatus && setTimeout(() => setRemoveFavStatus(false), 2000)
        && <DivRemoveSucefull>
          <TextRemoveSucefull>Item removido dos favoritos</TextRemoveSucefull>
        </DivRemoveSucefull> }
    </>
  );
};