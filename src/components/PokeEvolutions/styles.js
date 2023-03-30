import styled from "styled-components";
import {HiOutlineArrowSmRight} from "react-icons/hi";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: capitalize;
  
`;

export const EvolutionChain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 110px;
  border-radius: 10px;
  position: relative;
  background-color: transparent;
  padding: 0 15px;
  margin: 20px 0;
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
  height: 100%;
  border-radius: 10px;
  margin: 10px 0;
  position: relative;
  background-color: transparent;
`;


export const PokeImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 10px;
`;

export const PokeName = styled.h1`
  font-size: 20px;
  margin-top: 10px;
`;

export const PokeArrow = styled(HiOutlineArrowSmRight)`
  font-size: 20px;
  margin: 0 10px;
`;
