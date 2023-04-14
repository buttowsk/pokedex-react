import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: flex-start;
  width: 100%;
  text-transform: capitalize;
  gap: 25px;
  transition: all .3s ease-in-out;
  font-size: 1.3rem;
	padding: 10px 0;
	

  @media (min-width: 769px) {
    width: 90%;
    align-items: center;
    justify-content: flex-start;
    height: 40%;
    gap: 30px;
    font-size: 1.5rem;
    padding: 1rem 1.756rem;
  }
	
	@media (max-width: 320px) {
		font-size: 0.85rem;	
		gap: 10px;
  }
	
	@media (max-height: 700px) {
		height: 50%;
		font-size: 0.85rem;
		gap: 10px;
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
  gap: 2rem;
  width: 100%;
  max-height: 40px;
  padding: 0.5rem 1rem;

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
