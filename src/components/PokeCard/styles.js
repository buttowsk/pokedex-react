import styled from "styled-components";

export const PokeCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  color: #fff;
  text-transform: capitalize;

  ${({ element }) => element === 'fire' && `background-color: rgb(254, 98, 68);`}
  ${({ element }) => element === 'grass' && `background-color: rgb(149, 225, 31);`}
  ${({ element }) => element === 'water' && `background-color: rgb(176, 218, 255);`}
  ${({ element }) => element === 'dark' && `background-color: rgb(38, 42, 86);`}
  ${({ element }) => element === 'normal' && `background-color: rgb(227, 204, 174);`}
  ${({ element }) => element === 'ghost' && `background-color: rgb(113, 73, 198);`}
  ${({ element }) => element === 'bug' && `background-color: rgb(195, 247, 58);`}
  ${({ element }) => element === 'flying' && `background-color: rgb(236, 249, 255);`}
  ${({ element }) => element === 'poison' && `background-color: rgb(154, 32, 140);`}
  ${({ element }) => element === 'ground' && `background-color: rgb(240, 160, 75);`}
  ${({ element }) => element === 'fairy' && `background-color: rgb(245, 198, 236);`}
  ${({ element }) => element === 'psychic' && `background-color: rgb(242, 128, 220);`}
  ${({ element }) => element === 'electric' && `background-color: rgb(255, 237, 0);`}
  ${({ element }) => element === 'fighting' && `background-color: rgb(205, 4, 4);`}
  ${({ element }) => element === 'ice' && `background-color: rgb(176, 218, 255);`}
  ${({ element }) => element === 'rock' && `background-color: rgb(169, 144, 126);`}
  ${({ element }) => element === 'dragon' && `background-color: rgb(120, 102, 238);`}
  ${({ element }) => element === 'steel' && `background-color: rgb(170, 170, 187);`}

  &:hover {
    transform: scale(1.05);
  }
`;


export const PokeImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 20px;
`;

export const PokeName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const PokeType = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  border-radius: 8px;
  padding: 5px 10px;

  ${({ element }) => element === 'fire' && `background-color: rgba(254, 98, 68, .8);`}
  ${({ element }) => element === 'grass' && `background-color: rgba(149, 225, 31, .5);`}
  ${({ element }) => element === 'water' && `background-color: rgba(176, 218, 255, .5);`}
  ${({ element }) => element === 'dark' && `background-color: rgba(38, 42, 86, .8);`}
  ${({ element }) => element === 'normal' && `background-color: rgba(227, 204, 174, .5);`}
  ${({ element }) => element === 'ghost' && `background-color: rgba(113, 73, 198, .5);`}
  ${({ element }) => element === 'bug' && `background-color: rgba(195, 247, 58, .8);`}
  ${({ element }) => element === 'flying' && `background-color: rgba(236, 249, 255, .5);`}
  ${({ element }) => element === 'poison' && `background-color: rgba(154, 32, 140, 0.8);`}
  ${({ element }) => element === 'ground' && `background-color: rgba(240, 160, 75, .5);`}
  ${({ element }) => element === 'fairy' && `background-color: rgba(245, 198, 236, .5);`}
  ${({ element }) => element === 'psychic' && `background-color: rgba(242, 128, 220, .5);`}
  ${({ element }) => element === 'electric' && `background-color: rgba(255, 237, 0, .5);`}
  ${({ element }) => element === 'fighting' && `background-color: rgba(205, 4, 4, .5);`}
  ${({ element }) => element === 'ice' && `background-color: rgba(176, 218, 255, .5);`}
  ${({ element }) => element === 'rock' && `background-color: rgba(169, 144, 126, .5);`}
  ${({ element }) => element === 'dragon' && `background-color: rgba(120, 102, 238, .5);`}
  ${({ element }) => element === 'steel' && `background-color: rgba(170, 170, 187, .5);`}

`;
