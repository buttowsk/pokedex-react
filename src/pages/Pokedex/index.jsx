import {Title, List, Container,Content, TopRow, BackIcon, MenuIcon } from './styles'
import { PokeCard } from '../../components/PokeCard/index.jsx'

export const Pokedex = ({pokemons}) => {
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