import styled from "styled-components";
import {HiOutlineArrowSmRight} from "react-icons/hi";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 400px;
  text-transform: capitalize;
  gap: 10px;
  padding: 10px 0 ;

  @media (min-width: 769px) {
    width: 80%;
    margin-top: 12px;
    align-items: center;
    justify-content: center;
    height: 50%;
    border-left: 4px solid rgba(255,255,255,.35);
    gap: 50px;
    font-size: 1.5rem;
    padding: 20px 0;
  }
	
	@media (max-width: 1024px) {
		height: 900px;
  }

  @media (max-width: 320px) {
    font-size: 0.65rem;
    gap: 10px;
  }

`;

export const EvolutionChain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
	margin-top: 20px;
  width: 100%;
  height: 90px;
  position: relative;
  background-color: transparent;
  padding: 0 15px;

  @media (min-width: 769px) {
    height: 130px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 10px 0;
  padding: 8px 0;
`;


export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 769px) {
    height: 100%;
  }
`;


export const PokeImage = styled.img`
  width: 70px;
  height: 70px;
  margin: 0 10px;

  @media (min-width: 769px) {
    width: 130px;
    height: 130px;
  }
`;

export const PokeName = styled.h1`
  margin-top: 10px;
`;

export const PokeArrow = styled(HiOutlineArrowSmRight)`
  font-size: 20px;
  margin: 0 10px;
`;
