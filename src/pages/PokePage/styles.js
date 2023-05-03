import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import { BsHeartFill } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  ${ ({ bg }) => bg && `background-color: ${ bg }` };
  color: ${ ({ textColor }) => textColor };
  z-index: 999;
  overflow: auto;

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
  max-height: 50%;
  text-transform: capitalize;
  padding: 20px;

  @media (min-width: 769px) {
    padding: 36px;
    height: 100%;
    max-height: 100%;
    width: 50%;
  }
`;

export const IdText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const NameText = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 10px;

  @media (min-width: 769px) {
    font-size: 3.5rem;
    text-shadow: 0 0 12px rgb(0 0 0 / 25%);
  }

  @media (max-height: 600px) {
    font-size: 1rem;
  }
`;

export const PokeImage = styled.img`
  width: 60vw;
  margin: auto;
  transform: scaleX(-1);

  @media (min-width: 768px) {
    width: 30vw;
  }

  @media (max-height: 600px) {
    width: 100px;
    max-height: 100px;
  }

`;

export const ShinyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .4rem .756rem;
  align-self: flex-end;
  border-radius: 8px;
  border: 1px solid ${ ({ theme }) => theme.color };
  outline: none;
  background-color: #f3ca40;
  color: #fff;
  font-size: .8rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:focus,
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 769px) {
    padding: .7rem 1.5rem;
    font-size: 1rem;
    align-self: flex-start;
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  padding: 0 0 1rem 0;
  width: 90%;
  max-height: 50%;

  @media (min-width: 769px) {
    padding: 36px;
    align-items: center;
    justify-content: center;
    max-height: 100%;
    max-width: 55%;
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
  background-color: ${ ({ theme }) => theme.backgroundColor };
  border-radius: 8px;
  padding: 5px 10px;
  color: ${ ({ theme }) => theme.color };

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
  width: 100%;
  padding: 1.2rem;

  @media (min-width: 769px) {
    border: none;
    width: 80%;
    font-size: 1.5rem;
    gap: 1.5rem;
    padding: 10px 0;
  }
`;

export const MenuItem = styled.h2`
  font-size: 1.135rem;
  ${ ({ page }) => page !== 'selected' && `color: #6D5D6E;` }
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    margin-top: 10px;
    transition: all 0.5s ease-in-out;
    transform: scaleX(0);
  }

  ${ ({ page }) => page === 'selected' && `
    &::after {
      transform: scaleX(1.2);
    }
  ` };

  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

export const BackButton = styled(CgClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1rem;
  cursor: pointer;
  z-index: 999;

  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;

export const FavoriteButton = styled(BsHeartFill)`
  font-size: 1.7rem;
  cursor: pointer;
  z-index: 999;
  transition: all 0.2s ease-in-out;
  ${ ({ favorite }) => favorite === 'true' && `color: #FF0000` };

  @media (min-width: 769px) {
    font-size: 2.35rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;


export const AddFavoriteSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 8px;
  background-color: rgba(0, 255, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 999;
`;

export const AddFavoriteSuccessText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
  margin: 0 10px;

  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`;


export const RemoveFavoriteSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
  border-radius: 8px;
  padding: 2rem 2.5rem;
  background-color: rgba(255, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 999;
`;

export const RemoveFavoriteSuccessText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
  margin: 0 10px;

  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`;