import {
  ItemCardContainer,
  ItemName,
  ItemDescription,
  ItemPrice,
  ItemImage,
  ItemDescriptionContainer,
  ItemPriceContainer, FavoriteButton,
} from './styles.js';
import { useColors } from '../../hooks/useColors/index.js';
import { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../../contexts/favorites.jsx';

export const ItemCard = ({ item }) => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const { useGetBgColor, getTextColor } = useColors();
  const bgColor = useGetBgColor(item.image);
  const textColor = getTextColor(bgColor);
  const [favorite, setFavorite] = useState(null);

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
    } else {
      addFavorite(item);
    }
  };


  return (
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
  );
};