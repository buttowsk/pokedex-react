import styled from 'styled-components';

export const InputBox = styled.div`
  max-height: 3rem;
  width: 100%;
  position: relative;
  background-color: transparent;
  border-bottom: 2px solid springgreen;;
`;

export const InputText = styled.input`
  font-style: normal;
  font-size: 22px;
  font-weight: 600;
  height: 100%;
  background-color: transparent;
  color: springgreen;
  outline: none;
  padding: 8px;
  width: 100%;
  border: none;
`;

export const InputLabel = styled.label`
  font-style: normal;
  color: springgreen;
  font-size: 22px;
  font-weight: 600;
  left: 8px;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: .5s;

  ${ InputText }:focus ~ &,
  ${ InputText }:not(:placeholder-shown):not([value=""]) ~ & {
    top: -8px;
    font-size: 14px;
    color: #ccc;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: .5rem;
  color: red;
  padding: 0 .5rem;
`;