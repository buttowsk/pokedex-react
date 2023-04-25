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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  list-style: none;
  margin: 30px 0 0 0;
`;