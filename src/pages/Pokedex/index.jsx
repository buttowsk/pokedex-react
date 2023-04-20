import {Title, List, Container,Content, TopRow, BackIcon, MenuIcon } from './styles'
import { PokeCard } from '../../components/PokeCard/index.jsx'
import {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { ScrollBackComponent } from '../../components/ScrollBackComponent/index.jsx';

export const Pokedex = ({ pokeList, setPage, loading, hasMore }) => {
    const navigate = useNavigate();
    const [pokeArray, setPokeArray] = useState(Object.values(pokeList));
    const loaderRef = useRef(null);
    const [order, setOrder] = useState({ field: 'id', order: 'desc' });

    useEffect(() => {
        const scrollPosition = localStorage.getItem('scrollPosition');
        if (scrollPosition) {
            document.documentElement.scrollTop = scrollPosition;
            localStorage.removeItem('scrollPosition');
        }
    }, []);

    useEffect(() => {
        setPokeArray(Object.values(pokeList));
    }, [pokeList]);


    useEffect(() => {
        if (!loaderRef.current || !hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, [loaderRef, hasMore, setPage]);

    const handleCardClick = () => {
        localStorage.setItem('scrollPosition', document.documentElement.scrollTop);
    };

    /*

    useEffect(() => {
        const { field, order: sortOrder } = order;
        const asc = sortOrder === 'asc' ? 1 : -1;
        const desc = -asc;

        const sortedArray = [...pokeArray].sort((a, b) => {
            if (a[field] < b[field]) {
                return asc;
            } else if (a[field] > b[field]) {
                return desc;
            } else {
                return 0;
            }
        });

        setPokeArray(sortedArray);
    }, [order]); */

    if (loading || !pokeList) {
        return <LoadingComponent />;
    }

    console.log(pokeArray)
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
                        <PokeCard key={pokemon.id} pokemon={pokemon} onClick={handleCardClick} />
                    ))}
                </List>
                {!loading && <div ref={loaderRef}></div>}
            </Content>
        </Container>
    );
};