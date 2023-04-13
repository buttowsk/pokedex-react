import {InfoRow, InfoText, Container, TextRow, TypeRow, TypeText} from "./styles";
import { themes } from '../../globalStyles/styles.js';
import { LoadingComponent } from '../LoadingComponent/index.jsx';

export const PokeAbout = ({ poke }) => {
  if (!poke) {
    return <LoadingComponent />
  }

  return (
    <Container>
      <InfoRow>
        <TextRow>
          <InfoText>Height:
            {(poke.height / 10) >= 1 ? ` ${poke.height / 10}m` : ` ${poke.height}cm` }
          </InfoText>
        </TextRow>
        <TextRow>
          <InfoText>Weight:
            { (poke.weight / 10) >= 1 ? ` ${poke.weight / 10}kg` : ` ${poke.weight/10}g` }
          </InfoText>
        </TextRow>
      </InfoRow>
      <InfoRow>
        <TextRow>
          <InfoText>
            {poke.genderRate[0]}
          </InfoText>
        </TextRow>
        <TextRow>
          <InfoText>
            {poke.genderRate[1]}
          </InfoText>
        </TextRow>
      </InfoRow>
      <InfoRow>
        <InfoText>
          Abilities:
          {` ${poke.abilities[0]}`}, {`${poke.abilities[1]}`}
        </InfoText>
      </InfoRow>
      <InfoRow>
        <InfoText>
          Generation:
          {` ${poke.generation}`}
        </InfoText>
      </InfoRow>
      <TypeRow>
        <TypeText theme={themes[poke.types[0]]}>
          {` ${poke.types[0]}`}
        </TypeText>
        {poke.types[1] && (
          <TypeText theme={themes[poke.types[1]]}>
            {poke.types[1]}
          </TypeText>
        )}
      </TypeRow>
    </Container>

  )
}