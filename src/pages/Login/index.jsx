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
import { loginSchema } from '../../validations/Login/index.js';
import { SignUpSchema } from '../../validations/SignUp/index.js';
import { useFormik } from 'formik';
import { useMemo, useState} from 'react';
import { useColors } from '../../hooks/useColors/index.js';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { dbApi } from "../../services/dbApi.js";
import {useNavigate} from "react-router-dom";


export const Login = () => {
  const { useGetBgColor } = useColors();
  const [formState, setFormState] = useState('login');
  const randomNumber = useMemo(() => Math.floor(Math.random() * 800) + 1, []);
  const randomBg = useMemo(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`, [randomNumber]);
  const bgColor = useGetBgColor(randomBg);
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
            localStorage.setItem('token', response.data.token);
            navigate('/pokedex');
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
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => {
      const { name, email, password, confirmPassword } = values;
      if (password !== confirmPassword) {
        return alert('Senhas não conferem');
      }
      dbApi.post('/users', {name, email, password})
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
    formState === 'login' ? setFormState('signup') : setFormState('login');
    SignUpFormik.resetForm();
    loginFormik.resetForm();
  }

  const InputMemo = useMemo(() => Input, []);

  if (!bgColor) {
    return <LoadingComponent/>
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
            name="email"
            label="Email"
            error={ loginFormik.touched.email && loginFormik.errors.email }
          />
          <InputMemo
            onBlur={ loginFormik.handleBlur }
            onChange={ loginFormik.handleChange }
            value={ loginFormik.values.password }
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
            value={ SignUpFormik.values.name }
            name="name"
            label="Nome"
            error={ SignUpFormik.touched.name && SignUpFormik.errors.name }
          />
          <InputMemo
            onBlur={ SignUpFormik.handleBlur }
            onChange={ SignUpFormik.handleChange }
            value={ SignUpFormik.values.email }
            name="email"
            label="Email"
            error={ SignUpFormik.touched.email && SignUpFormik.errors.email }
          />
          <InputMemo
            onBlur={ SignUpFormik.handleBlur }
            onChange={ SignUpFormik.handleChange }
            value={ SignUpFormik.values.password }
            name="password"
            label="Senha"
            error={ SignUpFormik.touched.password && SignUpFormik.errors.password }
          />
          <InputMemo
            onBlur={ SignUpFormik.handleBlur }
            onChange={ SignUpFormik.handleChange }
            value={ SignUpFormik.values.confirmPassword }
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