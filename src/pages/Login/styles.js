import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 60%;
  padding: 3rem 0 5rem 0;
  background-color: #023C40;
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
    background: ${ ({ bgImage }) => `url(${ bgImage }) center / contain no-repeat` };
    ${ ({ formState }) => formState === 'login' ? 'transform: translateX(-100%);' +
            'border-radius: 10px 0 0 10px;'
            : 'transform: translateX(0);' + 'border-radius: 0 10px 10px 0;' };
    transition: .5s;
    z-index: 1;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: ${ ({ bgColor }) => bgColor };
    ${ ({ formState }) => formState === 'login' ? 'transform: translateX(-100%);' +
            'border-radius: 10px 0 0 10px;'
            : 'transform: translateX(0);' + 'border-radius: 0 10px 10px 0;' };
    transition: .5s;
    z-index: 1;
  }

  @media (max-width: 769px) {
    content: '';
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0;
    padding: 1rem 0 3rem 0;
    transition: transform .5s;
    transform: ${ ({ rotate }) => rotate };


    &::after {
      display: none;
    }

    &::before {
      display: none;
    }
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

  @media (max-width: 769px) {
    padding: 2rem 0;
    flex: 0;
    gap: 2rem;
    display: ${ ({ formState }) => formState === 'signup' ? 'none;' : 'flex;' };
    transform: ${ ({ rotate }) => rotate };
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
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

  @media (max-width: 769px) {
    padding: 2rem 0;
    flex: 0;
    gap: 2rem;
    transition: .5s;
    display: ${ ({ formState }) => formState === 'login' ? 'none' : 'flex' };
  }
`;

export const Button = styled.button`
  width: 75%;
  padding: .7rem 2rem;
  background-color: #FE4E00;
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 18px;
  margin-top: 1rem;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  background-color: transparent;
  padding: .5rem .2rem;
  border: none;
  font-size: 1rem;
  color: #9bf6f6;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpButton = styled.button`
  background-color: transparent;
  padding: .5rem .2rem;
  border: none;
  font-size: 1rem;
  color: #9bf6f6;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


export const Text = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
`;
