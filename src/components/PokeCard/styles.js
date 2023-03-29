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
  background-color: ${({theme}) => theme.backgroundColor};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  @media (max-width: 425px) {
    padding: 20px 5px;
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
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
  border-radius: 8px;
  padding: 5px 10px;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
`;


export const PokeTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
  background-color: transparent;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }

`;