import { GoogleIcon, Text, Button } from './styles.js';

export const GoogleLoginButton = () => {

  const handleOnclick = () => {
    window.location.href = 'https://buttowsk.pythonanywhere.com/login/google';
  };


  return (
    <Button onClick={ handleOnclick } type={ 'button' }>
      <GoogleIcon/>
      <Text>Entrar com Google</Text>
    </Button>
  );
};