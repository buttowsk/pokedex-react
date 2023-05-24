import {Container, LoadingContainer, PokeballImage, PokemonImage} from './styles.js'
import {useEffect, useState} from "react";

export const LoadingComponent2 = () => {
    const [poke, setPoke] = useState(1)

    useEffect(() => {
        setPoke(Math.floor(Math.random() * 630) + 1)
    }, [])


    return (
        <Container>
            <LoadingContainer>
                <PokemonImage
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke}.svg`}/>
                <PokeballImage/>
            </LoadingContainer>
        </Container>
    )
}