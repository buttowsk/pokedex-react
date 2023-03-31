import styled from "styled-components";
import {HiOutlineArrowSmRight} from "react-icons/hi";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 300px;
  text-transform: capitalize;
  gap: 10px;
  padding: 10px 0 ;
  
`;

export const EvolutionChain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  position: relative;
  background-color: transparent;
  padding: 0 15px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0 0 10px 0;
  padding: 0 15px;
`;


export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;


export const PokeImage = styled.img`
  max-width: 60px;
  max-height: 60px;
  margin: 0 10px;
`;

export const PokeName = styled.h1`
  font-size: 1.2rem;
  margin-top: 10px;
`;

export const PokeArrow = styled(HiOutlineArrowSmRight)`
  font-size: 20px;
  margin: 0 10px;
`;
