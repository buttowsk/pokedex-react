import {InfoText, InfoRow} from "../PokeAbout/styles.js";
import {NumberText, StatusBar} from "./styles.js";

export const PokeStats = ({ pokeInfo }) => {
    return (
        <>
            <InfoRow>
                <InfoText>HP</InfoText>
                <NumberText>{pokeInfo.stats[0].base_stat}</NumberText>
                <StatusBar percentual={pokeInfo.stats[0].base_stat} />
            </InfoRow>
            <InfoRow>
                <InfoText>Attack</InfoText>
                <NumberText>{pokeInfo.stats[1].base_stat}</NumberText>
                <StatusBar percentual={pokeInfo.stats[1].base_stat} />
            </InfoRow>
            <InfoRow>
                <InfoText>Defense</InfoText>
                <NumberText>{pokeInfo.stats[2].base_stat}</NumberText>
                <StatusBar percentual={pokeInfo.stats[2].base_stat} />
            </InfoRow>
            <InfoRow>
                <InfoText>Sp. Atk</InfoText>
                <NumberText>{pokeInfo.stats[3].base_stat}</NumberText>
                <StatusBar percentual={pokeInfo.stats[3].base_stat} />
            </InfoRow>
            <InfoRow>
                <InfoText>Sp. Def</InfoText>
                <NumberText>{pokeInfo.stats[4].base_stat}</NumberText>
                <StatusBar percentual={pokeInfo.stats[4].base_stat} />
            </InfoRow>
            <InfoRow>
                <InfoText>Speed</InfoText>
                <NumberText>{pokeInfo.stats[5].base_stat}</NumberText>
                <StatusBar percentual={pokeInfo.stats[5].base_stat} />
            </InfoRow>
        </>

    )
}