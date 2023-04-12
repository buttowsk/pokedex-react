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
            {(poke._height / 10) >= 1 ? ` ${poke._height / 10}m` : ` ${poke._height}cm` }
          </InfoText>
        </TextRow>
        <TextRow>
          <InfoText>Weight:
            { (poke._weight / 10) >= 1 ? ` ${poke._weight / 10}kg` : ` ${poke._weight/10}g` }
          </InfoText>
        </TextRow>
      </InfoRow>
      <InfoRow>
        <TextRow>
          <InfoText>
            {poke._genderRate}
          </InfoText>
        </TextRow>
      </InfoRow>
      <InfoRow>
        <InfoText>
          Abilities:
          {` ${poke._abilities[0]}`}, {`${poke._abilities[1]}`}
        </InfoText>
      </InfoRow>
      <InfoRow>
        <InfoText>
          Generation:
          {` ${poke._generation}`}
        </InfoText>
      </InfoRow>
      <TypeRow>
        <TypeText theme={themes[poke._types[0]]}>
          {` ${poke._types[0]}`}
        </TypeText>
        {poke._types[1] && (
          <TypeText theme={themes[poke._types[1]]}>
            {poke._types[1]}
          </TypeText>
        )}
      </TypeRow>
    </Container>

  )
}