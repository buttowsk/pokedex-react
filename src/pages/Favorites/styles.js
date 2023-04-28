import styled from 'styled-components';

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
  margin-top: 30px;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;


export const Title = styled.h1`
  font-size: 2rem;
  color: rgb(43, 72, 101);
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  height: 91%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 4%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 3rem;
  color: #a1a1a1;
  transition: all .3s ease-in-out;
  z-index: 2;
  ${ ({ direction }) => direction === 'right' ? 'right: 0;' +
          'border-radius: 8px 0 0 8px' : 'left: 0;' +
          'border-radius: 0 8px 8px 0' };

  display: ${ ({ show }) => show ? "flex" : "none" };
  
  &:focus,
  &:hover {
    transform: scale(1.05);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PokemonsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 1.2rem 0;
`;


export const PokemonsList = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: .756rem;
  align-items: center;
  position: relative;
  overflow: auto;

  & > * {
    flex: 0 0 250px;
  }
  

  @media (min-width: 769px) {
    overflow-x: hidden;
  }
`;

export const ItemsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  list-style: none;
  padding: .756rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;