import styled from "styled-components";

export const PokeCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

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
  color: #333;
  margin-bottom: 10px;
`;

export const PokeType = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  background-color: rgba(236, 249, 255, 0.5);
`;
