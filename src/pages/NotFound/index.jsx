import { Container, Content, Text, Image, HomeButton } from './styles.js';
import lucario from '../../assets/lucario.jpg';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HomeButton onClick={ () => navigate('/') }/>
      <Content>
        <Text>Page not found</Text>
        <Image src={ lucario } alt="Lucario slipping"/>
      </Content>
    </Container>
  );
};