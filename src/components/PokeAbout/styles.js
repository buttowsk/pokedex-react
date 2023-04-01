import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: flex-start;
  width: 100%;
  height: 100%;
  text-transform: capitalize;
  gap: 25px;
  transition: all .3s ease-in-out;
  font-size: 1rem;

  @media (min-width: 769px) {
    width: 80%;
    margin-top: 12px;
    align-items: center;
    justify-content: flex-start;
    height: 40%;
    border-left: 4px solid rgba(255,255,255,.35);
    gap: 30px;
    font-size: 1.5rem;
    padding: 10px 0;
  }

  @media (max-width: 1024px) {
    height: 350px;
    width: 90%;
  }
	
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 40px;
  padding: 8px 16px;

  @media (min-width: 769px) {
    max-height: 60px;
  }
`;

export const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const InfoText = styled.h3`
  font-weight: 600;
`;


export const TypeRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 40px;
  padding: 8px 16px;

  @media (min-width: 769px) {
    max-height: 60px;
	  display: none;
  }
`;
export const TypeText = styled.h3`
	font-weight: 600;
	background-color: ${({theme}) => theme.backgroundColor};
	color: ${({theme}) => theme.color};
	border-radius: 5px;
	padding: 5px 10px;
	
	@media (min-width: 769px) {
		display: none;
  }
`;
