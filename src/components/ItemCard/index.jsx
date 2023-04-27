import {
  ItemCardContainer,
  ItemName,
  ItemDescription,
  ItemPrice,
  ItemImage,
  ItemDescriptionContainer,
  ItemPriceContainer, FavoriteButton, DivAddSucefull, TextAddSucefull,
  DivRemoveSucefull, TextRemoveSucefull,
} from './styles.js';
import { useColors } from '../../hooks/useColors/index.js';
import { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../../contexts/favorites.jsx';

export const ItemCard = ({ item }) => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const { getBgColor, getTextColor } = useColors();
  const bgColor = getBgColor(item.image);
  const textColor = getTextColor(bgColor);
  const [favorite, setFavorite] = useState(null);
  const [addFavStatus, setAddFavStatus] = useState(false);
  const [removeFavStatus, setRemoveFavStatus] = useState(false);

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