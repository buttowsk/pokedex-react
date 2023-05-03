import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  text-transform: capitalize;
  padding: 20px;
  font-size: 1.3rem;
  gap: 18px;

  @media (min-width: 769px) {
    width: 80%;
    margin-top: 12px;
    justify-content: center;
    align-items: center;
    max-height: 40%;
    padding: 1.25rem 0;
    gap: 20px;
  }

  @media (max-width: 1024px) {
    height: 350px;
    width: 90%;
  }

  @media (max-width: 320px) {
    font-size: 0.95rem;
    gap: 10px;
  }

  @media (max-height: 700px) {
    height: 50%;
    font-size: 0.85rem;
    gap: 10px;
  }
`;


export const StatusBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #fcfcfc;
  border-radius: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${ ({ percentual }) => percentual }%;
    max-width: 120%;
    height: 6px;
    ${ ({ percentual }) => percentual < 50 ? 'background-color: #ff0000;' : 'background-color: #23dd7a;' }
    border-radius: 3px;
  }

`;

export const NumberText = styled.h3`
  text-align: center;
  width: 45px;
`;


export const StatusRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-height: 40px;
  gap: 20px;
`;

export const ValuesRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const StatusText = styled.h3`
  width: 150px;
`;


export const StatusValueDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 50%;
`;