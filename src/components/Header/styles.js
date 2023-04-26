import styled from 'styled-components';
import { IoChevronBack } from 'react-icons/io5';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const Username = styled.p`
  font-size: 1.6rem;
  color: rgb(43, 72, 101);
  font-weight: 600;
  text-transform: capitalize;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 .7rem;
  position: relative;
`;

export const BackIcon = styled(IoChevronBack)`
  width: 30px;
  height: 30px;
  color: rgb(43, 72, 101);
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: ${ ({ isOpen }) => isOpen ? 'flex' : 'none' };
  gap: 1.756rem;
  background-color: rgba(166, 208, 221, 0.5);
  backdrop-filter: blur(10px);
  flex-direction: column;
  align-items: start;
  border-radius: 5px;
  padding: .7rem;
  right: 10px;
  top: 35px;
  width: 200px;

  position: absolute;
  z-index: 1;
`;

export const NavText = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    width: 70%;
    gap: 1.32rem;
    font-size: 1.3rem;
    color: rgb(43, 72, 101);
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    ${ ({ page }) => page === 'selected' ? `color: #8FE388; font-size: 2rem;` : '&:focus,&:hover {transform: scale(1.1);}' };
  }
`;

export const DropdownText = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1.32rem;
    font-size: 1.3rem;
    color: rgb(43, 72, 101);
    font-weight: 600;
    text-transform: capitalize;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: .75rem 1rem;

    &:focus,
    &:hover {
      background-color: #ED2B2A;
      color: #fff;
    }
  }
`;