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
  padding: 2rem 0;
`;


