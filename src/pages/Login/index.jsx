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
import { Input } from '../../components/Input/index.jsx';
import { loginSchema } from '../../utils/schemas/Login/index.js';
import { SignUpSchema } from '../../utils/schemas/SignUp/index.js';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { useColors } from '../../hooks/useColors/index.js';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { dbApi } from '../../services/dbApi.js';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from '../../components/GoogleLoginButton/index.jsx';


export const Login = () => {
  const { getBgColor } = useColors();
  const [formState, setFormState] = useState('signup');
  const [rotate, setRotate] = useState('rotateY(0deg)');
  const [createAccountSuccess, setCreateAccountSuccess] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const randomNumber = useMemo(() => Math.floor(Math.random() * 800) + 1, []);
  const randomBg = useMemo(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ randomNumber }.png`, [randomNumber]);
  const bgColor = getBgColor(randomBg);
  const navigate = useNavigate();

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      dbApi.post('/login', { email, password })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('token', response.data.access_token);
            navigate('/');
          }
        })
        .catch((error) => {
          // Exibe uma mensagem de erro para o usuário
          setWrongCredentials(true);
          console.log(error);
        });
      resetForm();
    },
  });

  const SignUpFormik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => {
      const { username, email, password } = values;
      dbApi.post('/register', { username, email, password })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            setCreateAccountSuccess(true);
            handleFormState();
          }
        })
        .catch((error) => {
          console.log(error);
        });
      resetForm();
    },
  });


  const handleFormState = () => {
    formState === 'signup' ? setFormState('login') : setFormState('signup');
    setRotate(rotate === 'rotateY(0deg)' ? 'rotateY(180deg)' : 'rotateY(0deg)');
    setCreateAccountSuccess(false);
    setWrongCredentials(false);
    SignUpFormik.resetForm();
    loginFormik.resetForm();
  };

  const InputMemo = useMemo(() => Input, []);

  if (!bgColor) {
    return <LoadingComponent/>;
  }

  return (
    <Container>
      <FormContainer rotate={ rotate } formState={ formState } bgImage={ randomBg } bgColor={ bgColor }>
        <LoginForm rotate={ rotate } formState={ formState } onSubmit={ loginFormik.handleSubmit }>
          <Title>Login</Title>
          { wrongCredentials && (
            <ErrorContainer>
              <ErrorMessage>Usuário ou senha incorretos</ErrorMessage>
            </ErrorContainer>
          ) }
          <InputMemo
            onBlur={ loginFormik.handleBlur }
            onChange={ loginFormik.handleChange }
            value={ loginFormik.values.email }
            type={ 'email' }
            name="email"
            label="Email"
            error={ loginFormik.touched.email && loginFormik.errors.email }
          />
          <InputMemo
            onBlur={ loginFormik.handleBlur }
            onChange={ loginFormik.handleChange }
            value={ loginFormik.values.password }
            type={ 'password' }
            name="password"
            label="Senha"
            error={ loginFormik.touched.password && loginFormik.errors.password }
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
        <SignUpForm formState={ formState } onSubmit={ SignUpFormik.handleSubmit }>
          <Title>Sign Up</Title>
          { createAccountSuccess && (
            <SuccessContainer>
              <SuccessMessage>Conta criada com sucesso!</SuccessMessage>
            </SuccessContainer>
          ) }
          <InputMemo
            onBlur={ SignUpFormik.handleBlur }
            onChange={ SignUpFormik.handleChange }
            value={ SignUpFormik.values.username }
            type={ 'text' }
            name="username"
            label="Username"
            error={ SignUpFormik.touched.username && SignUpFormik.errors.username }
          />
          <InputMemo
            onBlur={ SignUpFormik.handleBlur }
            onChange={ SignUpFormik.handleChange }
            value={ SignUpFormik.values.email }
            type={ 'email' }
            name="email"
            label="Email"
            error={ SignUpFormik.touched.email && SignUpFormik.errors.email }
          />
          <InputMemo
            onBlur={ SignUpFormik.handleBlur }
            onChange={ SignUpFormik.handleChange }
            value={ SignUpFormik.values.password }
            type={ 'password' }
            name="password"
            label="Senha"
            error={ SignUpFormik.touched.password && SignUpFormik.errors.password }
          />
          <InputMemo
            onBlur={ SignUpFormik.handleBlur }
            onChange={ SignUpFormik.handleChange }
            value={ SignUpFormik.values.confirmPassword }
            type={ 'password' }
            name="confirmPassword"
            label="Confirme a senha"
            error={ SignUpFormik.touched.confirmPassword && SignUpFormik.errors.confirmPassword }
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