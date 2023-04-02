import {InfoRow, InfoText, Container, TextRow, TypeRow, TypeText} from "./styles";
import { themes } from '../../globalStyles/styles.js';

export const PokeAbout = ({pokeInfo, pokeSpecies}) => {

  if (pokeInfo === null || pokeSpecies === null) {
    return (<div>Loading...</div>)
  }

  return (
    <Container>
      <InfoRow>
        <TextRow>
          <InfoText>Height:
            {(pokeInfo.height / 10) >= 1 ? ` ${pokeInfo.height / 10}m` : ` ${pokeInfo.height}cm` }
          </InfoText>
        </TextRow>
        <TextRow>
          <InfoText>Weight:
            { (pokeInfo.weight / 10) >= 1 ? ` ${pokeInfo.weight / 10}kg` : ` ${pokeInfo.weight/10}g` }
          </InfoText>
        </TextRow>
      </InfoRow>
      <InfoRow>
        <TextRow>
          <InfoText>
            {pokeSpecies.gender_rate !== -1 ? `${(100 - (pokeSpecies.gender_rate * 10))}% Male` : 'Genderless'}
          </InfoText>
        </TextRow>
        <TextRow>
          <InfoText>
            {pokeSpecies.gender_rate !== -1 ? `${(pokeSpecies.gender_rate * 10)}% Female` : 'Genderless'}
          </InfoText>
        </TextRow>
      </InfoRow>
      <InfoRow>
        <InfoText>
          Abilities:
          {` ${pokeInfo.abilities[0]?.ability?.name}`}, {`${pokeInfo.abilities[1]?.ability?.name}`}
        </InfoText>
      </InfoRow>
      <InfoRow>
        <InfoText>
          Generation:
          {` ${pokeSpecies.generation?.name}`}
        </InfoText>
      </InfoRow>
      <TypeRow>
        <TypeText theme={themes[pokeInfo.types[0]?.type?.name]}>
          {` ${pokeInfo.types[0]?.type?.name}`}
        </TypeText>
        {pokeInfo.types[1]?.type?.name && (
          <TypeText theme={themes[pokeInfo.types[1]?.type?.name]}>
            {pokeInfo.types[1]?.type?.name}
          </TypeText>
        )}
      </TypeRow>
    </Container>

  )
}