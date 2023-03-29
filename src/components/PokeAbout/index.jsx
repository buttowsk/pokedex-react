import {InfoRow, InfoText} from "./styles";

export const PokeAbout = ({pokeInfo, pokeSpecies}) => {

    if (pokeInfo === null || pokeSpecies === null) {
        return (<div>Loading...</div>)
    }

    return (
        <>
            <InfoRow>
                <InfoText>Habitat</InfoText>
                {pokeSpecies.habitat?.name === null ? <InfoText>Unknown</InfoText> : <InfoText>{pokeSpecies?.habitat?.name}</InfoText>}
            </InfoRow>
            <InfoRow>
                <InfoText>Height</InfoText>
                { (pokeInfo.height / 10) >= 1 ? <InfoText>{pokeInfo.height / 10} m</InfoText> : <InfoText>{pokeInfo.height/10} cm</InfoText> }
            </InfoRow>
            <InfoRow>
                <InfoText>Weight</InfoText>
                { (pokeInfo.weight / 10) >= 1 ? <InfoText>{pokeInfo.weight / 10} kg</InfoText> : <InfoText>{pokeInfo.weight/10} g</InfoText> }
            </InfoRow>
            <InfoRow>
                <InfoText>Abilities</InfoText>
                <InfoText>{pokeInfo.abilities[0]?.ability?.name}, {pokeInfo.abilities[1]?.ability?.name}</InfoText>
            </InfoRow>
        </>
    )
}