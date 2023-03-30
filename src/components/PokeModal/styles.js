import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { BsHeart } from "react-icons/bs";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  text-transform: capitalize;
`;



export const BackButton = styled(IoIosArrowBack)`
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  z-index: 999;
`;

export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 450px;
  border-radius: 10px;
`;

export const PokeImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  position: relative;
  bottom: -20px;
  z-index: 999;
  filter: drop-shadow(0 0 12px rgba(87, 197, 182, 0.5));
  transform: scaleX(-1);

  @media (min-width: 768px) {
    width: 340px;
    height: 340px;
  }
`;

export const PokeNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  max-height: 60px;
  border-radius: 24px 24px 0 0;
  position: relative;
  padding: 20px;
  margin-top: 30px;
`;


export const PokeName = styled.h1`
  font-size: 30px;
  margin-top: 10px;
`;

export const PokeType = styled.h2`
  font-size: 16px;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
  border-radius: 8px;
  padding: 5px 10px;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
`;

export const PokeId = styled.span`
  font-size: 26px;
  position: absolute;
  top: 65px;
  right: 40px;
`;


export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  max-height: 340px;
  border-top: 1px solid #fff;
  position: relative;
 
`;

export const InfoContainerTopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  position: relative;
  background-color: transparent;
  padding: 0 15px;
  
  @media (min-width: 768px) {
    justify-content: space-around;
  }
  
`;

export const InfoContainerBottomColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  max-height: 400px;
  border-radius: 10px;
  position: relative;
  transition: all 0.5s ease-in-out;
  
  ${({page}) => page === 'Base Stats' && `
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    flex-flow: row wrap;
    
    & > * {
      margin: 14px 0;
    }
  }
`}

`;

export const PageTitle = styled.h2`
  font-size: 20px;
  ${({page}) => page === 'selected' ? `color: #000;` : `color: #6b6b6b;`}
  margin-top: 10px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    margin-top: 10px;
    transition: all 0.5s ease-in-out;
    transform: scaleX(0);
  }

  ${({page}) => page === 'selected' && `
    &:after {
      transform: scaleX(1.2);
    }
  `}
`;



