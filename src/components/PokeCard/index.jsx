import { PokeImage, PokeType, PokeName, PokeCardContainer } from './styles'
import {usePokemonInfo} from "../../hooks/usePokemonInfo/index.js";
export const PokeCard = ({url}) => {
    const {pokeInfo, isLoading} = usePokemonInfo(url);

    if (isLoading) {
        return (<div>Loading...</div>)
    }

    return (
        <PokeCardContainer element={pokeInfo.types[0]?.type.name}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <PokeImage src={pokeInfo.sprites?.front_shiny} />
                    <PokeName >{pokeInfo.name}</PokeName>
                    <PokeType element={pokeInfo.types[0]?.type.name}>{pokeInfo.types[0]?.type.name}</PokeType>
                    <PokeType element={pokeInfo.types[1]?.type.name}>{pokeInfo.types[1]?.type.name}</PokeType>
                </>
            )}
        </PokeCardContainer>
    )
}