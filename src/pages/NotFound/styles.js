import styled from 'styled-components';
import { HiHome } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100vh;
  padding: 10px 0;
  background-color: #dcd4cf;
  overflow-y: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  margin: 30px auto;
`;


export const Text = styled.p`
  font-size: 5rem;
  font-weight: 900;
  color: #1e1c36;
  text-transform: capitalize;

  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
`;


export const Image = styled.img`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 769px) {
    width: 50%;
  }
`;


export const HomeButton = styled(HiHome)`
  font-size: 2rem;
  color: #66c0bc;
  margin: 0 auto;
  cursor: pointer;
  transition: all .3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 769px) {
    font-size: 2.4rem;
  }
`;