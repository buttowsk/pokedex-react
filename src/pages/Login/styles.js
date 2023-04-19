import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  width: 60%;
  padding: 5rem 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #000;
    ${ ({ formState }) => formState === 'login' ? 'transform: translateX(-100%);' +
            'border-radius: 10px 0 0 10px;'
            : 'transform: translateX(0);' + 'border-radius: 0 10px 10px 0;' };
    transition: .5s;
    z-index: 1;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex: 1 0 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  gap: 3rem;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex: 1 0 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  gap: 3rem;
  justify-self: flex-end;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: #000;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #000;
  color: springgreen;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.7rem;
  color: springgreen;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.7rem;
  color: springgreen;
  cursor: pointer;
`;