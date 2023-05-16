import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import ScrollToTop from "react-scroll-to-top";
export const Scroll = styled(ScrollToTop)`
	background: #FF6700;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all .3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const ArrowUp = styled(IoIosArrowUp)`
	font-size: 1.5rem;
	color: #fff;
`;