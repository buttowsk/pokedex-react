import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	background-color: transparent;
`;


export const LoadingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ring = styled.div`
  width: 100px;
  height: 100px;
  border: 0 solid #000;
  border-radius: 50%;
  position: absolute;
  &:nth-child(1){
    border-bottom-width: 8px;
    border-color: rgb(255, 255, 255);
    animation: rotate1 2s linear infinite;
    -webkit-animation: rotate1 2s linear infinite;
  }

  &:nth-child(2){
    border-right-width: 8px;
    border-color: rgb(248, 95, 7);
    animation: rotate2 2s linear infinite;
    -webkit-animation: rotate2 2s linear infinite;
  }

  &:nth-child(3){
    border-top-width: 8px;
    border-color: rgb(18, 240, 40);
    animation: rotate3 2s linear infinite;
    -webkit-animation: rotate3 2s linear infinite;
  }

  @keyframes rotate1{
    0%{
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100%{
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
  @keyframes rotate2{
    0%{
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100%{
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }
  @keyframes rotate3{
    0%{
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100%{
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
`;

export const Loading = styled.span`
  color: #000;
`;
