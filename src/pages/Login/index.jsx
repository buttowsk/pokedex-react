import {
  Title,
  Container,
  FormContainer,
  LoginForm,
  SignUpForm,
  Button,
  SignUpButton,
  LoginButton,
} from './styles.js';
import { Input } from '../../components/Input/index.jsx';
import { loginSchema } from '../../schemas/Login/index.js';
import { SignUpSchema } from '../../schemas/SignUp/index.js';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { useColors } from '../../hooks/useColors/index.js';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { dbApi } from '../../services/dbApi.js';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const { getBgColor } = useColors();
  const [formState, setFormState] = useState('signup');
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
          alert('Email ou senha inválidos');
          console.log(error);
        });
      resetForm();
    },
  });

  const SignUpFormik = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => {
      const { fullname, username, email, password, confirmPassword } = values;
      dbApi.post('/register', { username, fullname, email, password })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            alert('Usuário cadastrado com sucesso!');
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
    SignUpFormik.resetForm();
    loginFormik.resetForm();
  };

  const InputMemo = useMemo(() => Input, []);

  if (!bgColor) {
    return <LoadingComponent/>;
  }

  return (
    <Container>
      <FormContainer formState={ formState } bgImage={ randomBg } bgColor={ bgColor }>
        <LoginForm onSubmit={ loginFormik.handleSubmit }>
          <Title>Login</Title>
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
          <LoginButton type={ 'reset' } onClick={ handleFormState }>Cadastrar</LoginButton>
        </LoginForm>
        <SignUpForm onSubmit={ SignUpFormik.handleSubmit }>
          <Title>Sign Up</Title>
          <InputMemo
            onBlur={ SignUpFormik.handleBlur }
            onChange={ SignUpFormik.handleChange }
            value={ SignUpFormik.values.fullname }
            type={ 'text' }
            name="fullname"
            label="Nome completo"
            error={ SignUpFormik.touched.fullname && SignUpFormik.errors.fullname }
          />
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
          <SignUpButton type={ 'reset' } onClick={ handleFormState }>Fazer login</SignUpButton>
        </SignUpForm>
      </FormContainer>
    </Container>
  );
};