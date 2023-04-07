import styled from "styled-components";
import {Link} from "react-router-dom";
import {TbPokeball} from 'react-icons/tb'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {GiPokecog} from 'react-icons/gi'
import {TiFlash} from 'react-icons/ti'
import {MdLocationOn} from 'react-icons/md'
import { TbSearch } from 'react-icons/tb';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100vh;
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: rgb(43, 72, 101);
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  background-color: rgba(43, 72, 101, 0.3);
  border-radius: 16px;
  padding: 0 20px;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  border-radius: 16px;
  padding: 0 20px;
  font-size: 20px;
  color: #333;
  margin: 20px 0;
  outline: none;
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 30px 0;
`;

export const ListItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  height: 100%;
  text-align: start;
  border-radius: 12px;
  font-size: 20px;
  color: #fff;
  ${({ buttonname }) => buttonname === 'pokedex' && `
    background-color: rgb(241, 55, 55);
    `}
  ${({ buttonname }) => buttonname === 'moves' && `
    background-color: rgb(240, 156, 39);
    `}
  ${({ buttonname }) => buttonname === 'items' && `
    background-color: rgb(124, 84, 140);
    `}
  ${({ buttonname }) => buttonname === 'locations' && `
    background-color: rgb(90, 169, 247);
    `}

  &:hover {
    opacity: 0.9;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: #fff;
`;




// icons //

export const Menu = styled(HiOutlineMenuAlt2)`
  color: rgba(43, 72, 101, 1);
  width: 32px;
  height: 32px;
`;

export const Pokeball = styled(TbPokeball)`
  opacity: 0.7;
  width: 32px;
  height: 32px;
`;

export const Flash = styled(TiFlash)`
  opacity: 0.7;
  width: 32px;
  height: 32px;
`;

export const Pokecog = styled(GiPokecog)`
  opacity: 0.7;
  width: 32px;
  height: 32px;
`;

export const Map = styled(MdLocationOn)`
  opacity: 0.7;
  width: 32px;
  height: 32px;
`;

export const Search = styled(TbSearch)`
  color: rgba(43, 72, 101, 1);
  width: 32px;
  height: 32px;
`;
// icons //