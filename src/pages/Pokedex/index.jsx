import {Title, List, Container,Content, TopRow, BackIcon, MenuIcon } from './styles'
import { PokeCard } from '../../components/PokeCard/index.jsx'
import {useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { ScrollBackComponent } from '../../components/ScrollBackComponent/index.jsx';

export const Pokedex = ({ pokeList, setPage, loading, hasMore }) => {
    const navigate = useNavigate();
    const pokeArray = Object.values(pokeList);
    const loaderRef = useRef(null);

    useEffect(() => {
        const scrollPosition = localStorage.getItem("scrollPosition");
        if (scrollPosition) {
            document.documentElement.scrollTop = scrollPosition;
            localStorage.removeItem("scrollPosition");
        }
    }, []);


    useEffect(() => {
        if (!loaderRef.current || !hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, [loaderRef, hasMore, setPage]);

    const handleCardClick = () => {
        localStorage.setItem("scrollPosition", document.documentElement.scrollTop);
    };

    if (loading || !pokeList) {
        return <LoadingComponent />;
    }

    return (
        <Container>
            <TopRow>
                <BackIcon onClick={() => navigate('/')} />
                <Title>Pokedex</Title>
                <MenuIcon />
            </TopRow>
            <Content>
                <ScrollBackComponent />
                <List>
                    {pokeArray.map((pokemon) => (
                        <PokeCard key={pokemon.id} pokemon={pokemon} onClick={() => handleCardClick()} />
                    ))}
                </List>
                {loading && <LoadingComponent />}
                {!loading && hasMore && <div ref={loaderRef}></div>}
            </Content>
        </Container>
    );
};