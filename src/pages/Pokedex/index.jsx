import {Title, List, Container,Content, TopRow, BackIcon, MenuIcon } from './styles'
import { PokeCard } from '../../components/PokeCard/index.jsx'
import {useAllPokemons} from "../../hooks/useAllPokemons/index.js";

export const Pokedex = () => {

    const {pokemons, loading} = useAllPokemons('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0');
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <Container>
            <TopRow>
                <BackIcon />
                <MenuIcon />
            </TopRow>
            <Content>
                <Title>Pokedex</Title>
                <List>
                    {pokemons.map((pokemon) => {
                        return <PokeCard key={pokemon.name} url={pokemon.url} />;
                    })}
                </List>
            </Content>
        </Container>
    );
};