import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  max-height: 3rem;
  padding: .7rem 2rem;
  background-color: #ffffff;
  color: #000000;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 18px;
  position: relative;
  
  &:hover,
  &:focus {
    background-color: #e6e6e6;
  }
`;

export const GoogleIcon = styled(FcGoogle)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  position: absolute;
  left: 1.5rem;
  
  @media (max-width: 768px) {
    left: 1rem;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: .8rem;
  }
`;