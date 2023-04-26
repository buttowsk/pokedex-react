import styled from 'styled-components';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuIcon = styled(BiMenuAltRight)`
  width: 30px;
  height: 30px;
  color: rgb(43, 72, 101);
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: ${ ({ isOpen }) => isOpen ? 'flex' : 'none' };
  background-color: rgba(166, 208, 221, 0.5);
  backdrop-filter: blur(10px);
  flex-direction: column;
  align-items: start;
  border-radius: 5px;
  padding: .7rem;
  right: 2px;
  width: 500px;
  position: absolute;
  z-index: 1;
`;

export const DropdownLink = styled(Link)`
  color: rgb(43, 72, 101);
  font-size: 1.2rem;
  width: 100%;
  padding: .75rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  display: block;

  &:hover {
    background-color: #ED2B2A;
    color: #fff;
  }
`;

export const DropdownText = styled.p`
  color: rgb(43, 72, 101);
  font-size: 1.2rem;
  width: 100%;
  padding: .75rem 1rem;
  text-decoration: none;
  text-transform: capitalize;
  border-radius: 5px;
  display: none;

  &:hover {
    background-color: #ED2B2A;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: block;
  }

`;


export const LogoutButton = styled.button`
  color: rgb(43, 72, 101);
  font-size: 1.2rem;
  width: 100%;
  justify-self: flex-end;
  padding: .75rem 1rem;
  text-decoration: none;
  text-transform: capitalize;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: start;

  &:focus,
  &:hover {
    background-color: #ED2B2A;
    color: #fff;
  }
`;

