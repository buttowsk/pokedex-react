import styled from 'styled-components';
import pokeball from '../../assets/pokeball.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({scrollLoading}) => scrollLoading ? '100%' : '100vh'};
  background-color: transparent;
`;


export const LoadingContainer = styled.div`
  position: relative;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const PokemonImage = styled.img`
  width: 100px;
  object-fit: contain;
  position: absolute;
  animation: rotateImage 2s linear infinite;

  @keyframes rotateImage {
    0% {
      transform: scale(1);
      left: -3rem;
    }
    25% {
      transform: scale(0.4);
      left: 3rem;
    }
    50% {
      transform: scale(1);
      left: 6rem;
    }
    75% {
      transform: scale(1.4);
      left: 3rem;
      z-index: 1;
    }
    100% {
      transform: scale(1);
      left: -3rem;
      z-index: 0;
    }
  }
`;

export const PokeballImage = styled.img.attrs(
    ({src}) => ({
        src: src || pokeball
    })
)`
  width: 100px;
  object-fit: contain;
  position: absolute;
  animation: rotatePokeball 2s linear infinite 1s;

  @keyframes rotatePokeball {
    0% {
      transform: rotateZ(0deg) scale(1);
      left: -3rem;
    }
    25% {
      transform: rotateZ(90deg) scale(0.4);
      left: 3rem;
    }
    50% {
      transform: rotateZ(180deg) scale(1);
      left: 6rem;
    }
    75% {
      transform: rotateZ(270deg) scale(1.4);
      left: 3rem;
    }
    100% {
      transform: rotateZ(360deg) scale(1);
      left: -3rem;
    }
  }
`;

