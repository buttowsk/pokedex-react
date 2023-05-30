import { GoogleIcon, Text, Button } from './styles.js';

export const GoogleLoginButton = () => {

  const handleOnclick = () => {
    window.location.href = 'http://localhost:5000/login/google';
  };


  return (
    <Button onClick={ handleOnclick } type={ 'button' }>
      <GoogleIcon/>
      <Text>Entrar com Google</Text>
    </Button>
  );
};