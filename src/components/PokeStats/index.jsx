import { Container, NumberText, StatusBar, StatusRow, StatusText } from './styles.js';
import { LoadingComponent } from '../LoadingComponent/index.jsx';

export const PokeStats = ({ poke }) => {
  if (!poke) {
    return <LoadingComponent/>;
  }

  return (
    <Container>
      <StatusRow>
        <StatusText>HP</StatusText>
        <NumberText>{ poke.stats[0].value }</NumberText>
        <StatusBar percentual={ poke.stats[0].value }/>
      </StatusRow>
      <StatusRow>
        <StatusText>Attack</StatusText>
        <NumberText>{ poke.stats[1].value }</NumberText>
        <StatusBar percentual={ poke.stats[1].value }/>
      </StatusRow>
      <StatusRow>
        <StatusText>Defense</StatusText>
        <NumberText>{ poke.stats[2].value }</NumberText>
        <StatusBar percentual={ poke.stats[2].value }/>
      </StatusRow>
      <StatusRow>
        <StatusText>Sp. Atk</StatusText>
        <NumberText>{ poke.stats[3].value }</NumberText>
        <StatusBar percentual={ poke.stats[3].value }/>
      </StatusRow>
      <StatusRow>
        <StatusText>Sp. Def</StatusText>
        <NumberText>{ poke.stats[4].value }</NumberText>
        <StatusBar percentual={ poke.stats[4].value }/>
      </StatusRow>
      <StatusRow>
        <StatusText>Speed</StatusText>
        <NumberText>{ poke.stats[5].value }</NumberText>
        <StatusBar percentual={ poke.stats[5].value }/>
      </StatusRow>
    </Container>

  );
};