import {InfoRow, InfoText, Container, TextRow} from "./styles";

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

                        {` ${100 -(pokeSpecies.gender_rate * 10)}% Male`}
                    </InfoText>
                </TextRow>
                <TextRow>
                    <InfoText>
                        {`  ${pokeSpecies.gender_rate * 10}% Female`}</InfoText>
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
        </Container>

    )
}