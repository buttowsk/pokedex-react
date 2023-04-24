import styled from 'styled-components';
import { IoChevronBack } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 10px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  margin-top: 30px;
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  list-style: none;
  margin: 30px 0 0 0;
  padding: 0 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;


export const Username = styled.p`
  font-size: 1rem;
  color: rgb(43, 72, 101);
  font-weight: 600;
  text-transform: capitalize;
  
  @media (max-width: 425px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .7rem;
  padding: 0 .7rem;
`;

export const BackIcon = styled(IoChevronBack)`
  width: 30px;
  height: 30px;
  color: rgb(43, 72, 101);
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 38px;
  color: rgb(43, 72, 101);
`;