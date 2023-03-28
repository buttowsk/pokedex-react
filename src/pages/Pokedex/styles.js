import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100vh;
  padding: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin-top: 30px;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  padding: 0 10px;
`;


export const Title = styled.h1`
  font-size: 38px;
  color: rgb(43, 72, 101);
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  list-style: none;
  margin: 30px 0;
`;


// icons //
export const BackIcon = styled(IoChevronBack)`
  width: 30px;
  height: 30px;
  color: rgb(43, 72, 101);
  cursor: pointer;
`;

export const MenuIcon = styled(BiMenuAltRight)`
  width: 30px;
  height: 30px;
  color: rgb(43, 72, 101);
  cursor: pointer;
`;