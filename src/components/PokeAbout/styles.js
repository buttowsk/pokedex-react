import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: capitalize;
  gap: 10px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 40px;
  padding: 8px 16px;
`;

export const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`;

export const InfoText = styled.h3`
  font-size: 18px;
`;