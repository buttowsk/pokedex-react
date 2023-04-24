import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TbPokeball } from 'react-icons/tb';
import { GiPokecog } from 'react-icons/gi';

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


export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

  ${ ({ buttonname }) => buttonname === 'pokedex' && `
    background-color: rgb(241, 55, 55);
    ` }
  ${ ({ buttonname }) => buttonname === 'items' && `
    background-color: rgb(124, 84, 140);
    ` }
  &:hover {
    opacity: 0.9;
  }
`;


// icons //
export const Pokeball = styled(TbPokeball)`
  opacity: 0.7;
  width: 32px;
  height: 32px;
`;

export const Pokecog = styled(GiPokecog)`
  opacity: 0.7;
  width: 32px;
  height: 32px;
`;
// icons //