import { PokeImage, PokeType, PokeName, PokeCardContainer } from './styles'
import {usePokemonInfo} from "../../hooks/usePokemonInfo/index.js";
export const PokeCard = ({url}) => {
    const {pokeInfo, isLoading} = usePokemonInfo(url);

    return (
        <PokeCardContainer>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <PokeImage src={pokeInfo.sprites?.front_default} />
                    <PokeName>{pokeInfo.name}</PokeName>
                    <PokeType>{pokeInfo.types[0].type.name}</PokeType>
                    <PokeType>{pokeInfo.types[1]?.type.name}</PokeType>
                </>
            )}
        </PokeCardContainer>
    )
}