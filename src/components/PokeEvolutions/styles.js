import styled from "styled-components";
import {HiOutlineArrowSmRight} from "react-icons/hi";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-height: 400px;
  text-transform: capitalize;
  gap: 45px;
  padding: 10px 0 ;
	font-size: 1.2rem;
	color: ${({textColor}) => textColor};

  @media (min-width: 769px) {
    width: 80%;
    margin-top: 12px;
    align-items: center;
    justify-content: center;
    height: 50%;
    gap: 50px;
    font-size: 1.4rem;
    padding: 20px 0;
  }
	
	@media (max-width: 1024px) {
		height: 900px;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
    gap: 10px;
  }
  @media (max-height: 700px) {
    height: 50%;
    font-size: 1rem;
    gap: 20px;
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

export const Title = styled.p`
  margin: 0 0 10px 0;
  padding: 8px 0;
`;


export const PokeContainer = styled(Link)`
	text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: inherit;

  @media (min-width: 769px) {
    height: 100%;
  }
`;


export const PokeImage = styled.img`
  width: 70px;
  height: 70px;
  margin: 0 10px;

  @media (min-width: 769px) {
    width: 120px;
    height: 120px;
  }
`;

export const PokeName = styled.p`
  margin-top: 10px;
`;

export const PokeArrow = styled(HiOutlineArrowSmRight)`
  font-size: 20px;
  margin: 0 10px;
`;
