import {Container, NumberText, StatusBar, StatusRow, StatusText} from "./styles.js";
import {LoadingComponent} from "../LoadingComponent/index.jsx";

export const PokeStats = ({ pokeInfo }) => {
  if (!pokeInfo ) {
    return <LoadingComponent/>
  }

  return (
    <Container>
      <StatusRow>
        <StatusText>HP</StatusText>
        <NumberText>{pokeInfo.stats[0].base_stat}</NumberText>
        <StatusBar percentual={pokeInfo.stats[0].base_stat} />
      </StatusRow>
      <StatusRow>
        <StatusText>Attack</StatusText>
        <NumberText>{pokeInfo.stats[1].base_stat}</NumberText>
        <StatusBar percentual={pokeInfo.stats[1].base_stat} />
      </StatusRow>
      <StatusRow>
        <StatusText>Defense</StatusText>
        <NumberText>{pokeInfo.stats[2].base_stat}</NumberText>
        <StatusBar percentual={pokeInfo.stats[2].base_stat} />
      </StatusRow>
      <StatusRow>
        <StatusText>Sp. Atk</StatusText>
        <NumberText>{pokeInfo.stats[3].base_stat}</NumberText>
        <StatusBar percentual={pokeInfo.stats[3].base_stat} />
      </StatusRow>
      <StatusRow>
        <StatusText>Sp. Def</StatusText>
        <NumberText>{pokeInfo.stats[4].base_stat}</NumberText>
        <StatusBar percentual={pokeInfo.stats[4].base_stat} />
      </StatusRow>
      <StatusRow>
        <StatusText>Speed</StatusText>
        <NumberText>{pokeInfo.stats[5].base_stat}</NumberText>
        <StatusBar percentual={pokeInfo.stats[5].base_stat} />
      </StatusRow>
    </Container>

  )
}