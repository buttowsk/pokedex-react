import styled from "styled-components";

export const StatusBar = styled.div`
  width: 180px;
  height: 6px;
  background-color: #949494;
  border-radius: 3px;
  position: relative;
  margin-top: 20px;

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
  
  
  @media (min-width: 768px) {
    width: 400px;
  }
  
`;

export const NumberText = styled.h3`
  font-size: 20px;
  color: #000;
  min-width: 50px;
  margin-top: 10px;
`;
