import styled from "styled-components";
import { CgClose } from "react-icons/cg";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  ${({bg}) => bg && `background-color: ${bg}`};
  color: ${({theme}) => theme.color};
  z-index: 999;

  @media (min-width: 769px) {
    flex-direction: row;
    text-shadow: 0 0 12px rgb(0 0 0 / 25%)
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 100%;
  height: 50%;
  text-transform: capitalize;
  padding: 20px;

  @media (min-width: 769px) {
    padding: 36px;
    height: 100%;
    width: 50%;
  }

`;

export const IdText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 0 0 12px rgb(0 0 0 / 25%)
`;

export const NameText = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  
  @media (min-width: 769px) {
    font-size: 3.5rem;
    text-shadow: 0 0 12px rgb(0 0 0 / 25%);
  }
`;

export const PokeImage = styled.img`
  width: 170px;
  height: 170px;
  margin: auto;

  @media (min-width: 769px) {
    width: 540px;
    height: 540px;
  }
`;


export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 90%;
  height: 50%;

  @media (min-width: 769px) {
    padding: 36px;
    margin-top: 12%;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
  }
`;

export const ElementsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 70px;
  gap: 20px;
  margin-bottom: 20px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TypeText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  background-color: ${({theme}) => theme.backgroundColor};
  border-radius: 8px;
  padding: 5px 10px;

  @media (max-width: 767px) {
    display: none;
  }
`;


export const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  border-top: 4px solid rgba(255,255,255,.35);
  width: 100%;
  height: 50px;
  padding: 12px 20px;

  @media (min-width: 769px) {
    border: none;
    width: 80%;
    font-size: 1.5rem;
  }
  

`;

export const MenuItem = styled.h2`
  font-size: 1rem;
  ${({page}) => page !== 'selected' && `color: #BDCDD6;`}
  margin-top: 10px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    margin-top: 10px;
    transition: all 0.5s ease-in-out;
    transform: scaleX(0);
  }

  ${({page}) => page === 'selected' && `
    &:after {
      transform: scaleX(1.2);
    }
  `};
  
  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

export const BackButton = styled(CgClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  z-index: 999;
  
  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;