import {
  Title,
  Container,
  FormContainer,
  LoginForm,
  SignUpForm,
  Button,
  SignUpButton,
  LoginButton, Text, SuccessMessage, ErrorMessage, ErrorContainer, SuccessContainer,
} from './styles.js';
import { Input } from './Input/index.jsx';
import { loginSchema, SignUpSchema } from '../../utils/schemas';
import { useForm } from 'react-hook-form';
import { useContext, useMemo, useState } from 'react';
import { useColors } from '../../hooks/useColors';
import { LoadingComponent } from '../../components/LoadingComponent';
import { dbApi } from '../../services/dbApi.js';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from './GoogleLoginButton';
import { AuthorizationContext } from '../../context/authorization.jsx';
import { yupResolver } from '@hookform/resolvers/yup';


export const Login = () => {
  const { getBgColor } = useColors();
  const { isAuthorized, setIsAuthorized } = useContext(AuthorizationContext);
  const [formState, setFormState] = useState('login');
  const [rotate, setRotate] = useState('rotateY(0deg)');
  const [createAccountSuccess, setCreateAccountSuccess] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const randomNumber = useMemo(() => Math.floor(Math.random() * 800) + 1, []);
  const randomBg = useMemo(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ randomNumber }.png`, [randomNumber]);
  const bgColor = getBgColor(randomBg);
  const navigate = useNavigate();

  const {
    register: registerLogin,
    watch: watchLogin,
    reset: resetLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const {
    register: registerSignUp,
    watch: watchSignUp,
    reset: resetSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: 'all',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  });

  const loginSubmit = async (data) => {
    const { email, password } = data;
    const result = await dbApi.post('/login', { email, password });
    if (result.status === 200) {
      setWrongCredentials(false);
      localStorage.setItem('token', result.data.access_token);
      setIsAuthorized(true);
      navigate('/');
    } else {
      setWrongCredentials(true);
    }
  };

  const signUpSubmit = async (data) => {
    const { username, email, password } = data;
    const result = await dbApi.post('/register', { username, email, password });
    if (result) {
      setCreateAccountSuccess(true);
      setFormState('login');
      setRotate('rotateY(0deg)');
      resetSignUp();
    } else {
      setCreateAccountSuccess(false);
    }
  };

  const handleFormState = () => {
    formState === 'signup' ? setFormState('login') : setFormState('signup');
    setRotate(rotate === 'rotateY(0deg)' ? 'rotateY(180deg)' : 'rotateY(0deg)');
    setCreateAccountSuccess(false);
    setWrongCredentials(false);
    resetLogin();
    resetSignUp();
  };

  if (!bgColor) {
    return <LoadingComponent/>;
  }

  return (
    <Container>
      <FormContainer rotate={ rotate } formState={ formState } bgImage={ randomBg } bgColor={ bgColor }>
        <LoginForm formState={ formState } onSubmit={ handleSubmitLogin(loginSubmit) }>
          <Title>Login</Title>
          { wrongCredentials && (
            <ErrorContainer>
              <ErrorMessage>Usuário ou senha incorretos</ErrorMessage>
            </ErrorContainer>
          ) }
          <Input
            register={ registerLogin }
            type={ 'text' }
            name="email"
            label="Email"
            text={ watchLogin('email', false)}
            error={ errorsLogin.email?.message }
          />
          <Input
            register={ registerLogin }
            type={ 'password' }
            name="password"
            label="Senha"
            text={ watchLogin('password', false)}
            error={ errorsLogin.password?.message }
          />
          <Button type={ 'submit' }>Login</Button>
          <Text>
            Não tem uma conta?
            <LoginButton type={ 'reset' } onClick={ handleFormState }>Cadastrar</LoginButton>
          </Text>
          <Text>
            Ou
          </Text>
          <GoogleLoginButton/>
        </LoginForm>
        <SignUpForm rotate={ rotate } formState={ formState } onSubmit={ handleSubmitSignUp(signUpSubmit) }>
          <Title>Sign Up</Title>
          { createAccountSuccess && (
            <SuccessContainer>
              <SuccessMessage>Conta criada com sucesso!</SuccessMessage>
            </SuccessContainer>
          ) }
          <Input
            register={ registerSignUp }
            type={ 'text' }
            name="username"
            label="Nome de usuário"
            text={ watchSignUp('username', false)}
            error={ errorsSignUp.username?.message }
          />
          <Input
            register={ registerSignUp }
            type={ 'text' }
            name="email"
            label="Email"
            text={ watchSignUp('email', false)}
            error={ errorsSignUp.email?.message }
          />
          <Input
            register={ registerSignUp }
            type={ 'password' }
            name="password"
            label="Senha"
            text={ watchSignUp('password', false)}
            error={ errorsSignUp.password?.message }
          />
          <Input
            register={ registerSignUp }
            type={ 'password' }
            name="confirmPassword"
            label="Confirmar senha"
            text={ watchSignUp('confirmPassword', false)}
            error={ errorsSignUp.confirmPassword?.message }
          />
          <Button type={ 'submit' }>Cadastrar</Button>
          <Text>
            Já tem uma conta?
            <SignUpButton type={ 'reset' } onClick={ handleFormState }>Fazer login</SignUpButton>
          </Text>
        </SignUpForm>
      </FormContainer>
    </Container>
  );
};