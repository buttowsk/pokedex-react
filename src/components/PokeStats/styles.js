import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: capitalize;
  padding: 20px;
`;


export const StatusBar = styled.div`
  width: 180px;
  height: 6px;
  background-color: #fcfcfc;
  border-radius: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({percentual}) => percentual}%;
    max-width: 120%;
    height: 6px;
    ${({percentual}) => percentual < 50 ? 'background-color: #ff0000;' : 'background-color: #23dd7a;'}
    border-radius: 3px;
  }


  @media (min-width: 1024px) {
    width: 340px;
  }

`;

export const NumberText = styled.h3`
  font-size: 20px;
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
  font-size: 20px;
  width: 120px;
`;
