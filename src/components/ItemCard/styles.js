import styled from 'styled-components';
import { BsHeartFill } from 'react-icons/bs';

export const ItemCardContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 450px;
  background-color: ${ ({ bg }) => bg };
  color: ${ ({ color }) => color };
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ItemImage = styled.img`
  width: 90px;
  height: 90px;
`;

export const ItemName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
`;

export const ItemPriceContainer = styled.div`
  text-align: center;
  padding: 2px 4px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ItemPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #FFD93D;
`;

export const ItemDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 52ch;
  overflow: hidden;
`;

export const ItemDescription = styled.p`
  font-size: 1.15rem;
  padding: 10px;
  font-weight: 600;
`;

export const HeldByContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeldBy = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const PokemonImage = styled.img`
  width: 90px;
  height: 90px;
`;


export const FavoriteButton = styled(BsHeartFill)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 999;
  transition: all 0.2s ease-in-out;
  ${ ({ favorite }) => favorite === 'true' && `color: #FF0000` };

  @media (min-width: 769px) {
    font-size: 1.756rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`