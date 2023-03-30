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
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  z-index: 999;
`;

export const TopColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 100%;
  height: 60%;
  color: ${({theme}) => theme.color};
  text-transform: capitalize;
  padding: 20px;
  
  @media (min-width: 768px) {
    width: 50%;
  }
  
`;

export const IdText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const NameText = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const PokeImage = styled.img`
  width: 240px;
  height: 240px;
  margin: auto;
  filter: drop-shadow(0 0 12px rgba(87, 197, 182, 0.5));

  @media (min-width: 768px) {
    width: 340px;
    height: 340px;
  }
`;


export const BottomColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 90%;
  height: 40%;
  color: ${({theme}) => theme.color};
  
  
    @media (min-width: 768px) {
    width: 50%;
      
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
`;

export const MenuItem = styled.h2`
  font-size: 20px;
  ${({page}) => page === 'selected' ? `color: #000;` : `color: #6b6b6b;`}
  margin-top: 10px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  color: #fff;

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
  `}
`;

export const BackButton = styled(CgClose)`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    z-index: 999;
`;