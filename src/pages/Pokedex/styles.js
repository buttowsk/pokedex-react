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

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;


export const Title = styled.h1`
  font-size: 2rem;
  color: rgb(43, 72, 101);
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  list-style: none;
  margin: 30px 0 0 0;

`;

export const DivLoadMore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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


// icons //
export const BackIcon = styled(IoChevronBack)`
  width: 30px;
  height: 30px;
  color: rgb(43, 72, 101);
  cursor: pointer;
`;

