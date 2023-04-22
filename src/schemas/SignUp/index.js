import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
  name: yup.string().required('Informe um nome'),
  email: yup.string().email('Email inválido').required('Informe um email'),
  password: yup.string().required('Informe uma senha')
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(20, 'A senha deve ter no máximo 20 caracteres'),
  confirmPassword: yup.string().required('Informe uma senha')
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(20, 'A senha deve ter no máximo 20 caracteres')
    .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
});

