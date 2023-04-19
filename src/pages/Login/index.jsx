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
import { useMemo, useState } from 'react';


export const Login = () => {
  const [formState, setFormState] = useState('login');

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      console.log(email, password);
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
    onSubmit: (values) => {
      const { name, email, password, confirmPassword } = values;
      console.log(name, email, password, confirmPassword);
    },
  });

  const InputMemo = useMemo(() => Input, []);

  return (
    <Container>
      <LoginButton onClick={ () => setFormState('login') }>Login</LoginButton>
      <SignUpButton onClick={ () => setFormState('signup') }>SignUp</SignUpButton>
      <FormContainer formState={formState}>
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
          <Button type={ 'submit' }>Sign In</Button>
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
          <Button type={ 'submit' }>Sign Up</Button>
        </SignUpForm>
      </FormContainer>
    </Container>
  );
};