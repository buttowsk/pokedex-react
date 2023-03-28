import {
    Container,
    List,
    ListItem,
    Button,
    Title,
    Pokeball,
    Flash,
    Pokecog,
    Map,
    Input,
    Content, SearchBar, Search
} from './styles';


export const Home = () => {
    return (
        <Container>
            <Content>
                <Title>O que está procurando?</Title>
                <SearchBar>
                    <Search />
                    <Input type="text" placeholder="Search Pokemon" />
                </SearchBar>
                <List>
                    <ListItem buttonName={'pokedex'}>
                        <Button to="/pokedex">Pokedex</Button>
                        <Pokeball />
                    </ListItem>
                    <ListItem buttonName={'moves'}>
                        <Button to="/moves">Moves</Button>
                        <Flash />
                    </ListItem>
                    <ListItem buttonName={'items'}>
                        <Button to="/items">Items</Button>
                        <Pokecog />
                    </ListItem>
                    <ListItem buttonName={'locations'}>
                        <Button to="/locations">Locations</Button>
                        <Map />
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
}