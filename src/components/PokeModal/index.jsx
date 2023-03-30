/*
import {
    PokeImage,
    PokeType,
    PokeName,
    InfoContainer,
    InfoContainerTopRow,
    Modal,
    PokeContainer,
    PokeId,
    BackButton, InfoContainerBottomColumn, PageTitle, PokeNameContainer,
} from './styles';
import {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import {themes} from "../../globalStyles/styles.js";
import {PokeAbout} from "../PokeAbout/index.jsx";
import {PokeStats} from "../PokeStats/index.jsx";
import {PokeEvolutions} from "../PokeEvolutions/index.jsx";
import {useGenerateTypeInfo} from "../../hooks/useGenerateTypeInfo/index.js";

export const PokeModal = ({ pokeInfo, isModalOpen, setIsModalOpen, pokeSpecies }) => {
    const { id, name, types, sprites, height, weight, abilities } = pokeInfo;
    const { typeInfo, isLoading, error } = useGenerateTypeInfo(types);
    const { generation } = pokeSpecies;
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedPage, setSelectedPage] = useState('about');



    const handlePageTitleClick = (page) => {
        setSelectedPage(page);
    }


    useEffect(() => {
        const body = document.querySelector('body');

        if (isModalOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'unset';
        }

        return () => {
            body.style.overflow = 'unset';
        };
    }, [isModalOpen]);


    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    const theme = themes[pokeInfo.types[0]?.type.name];


    return (
        <>
            {isModalOpen && (
                <ThemeProvider theme={theme}>
                    <Modal>
                        <BackButton onClick={() => setIsModalOpen(false)} />
                        <PokeContainer>
                            <PokeNameContainer>
                                <PokeName>{name}</PokeName>
                                { theme && <PokeType theme={theme}>{ pokeInfo.types[0]?.type.name }</PokeType> }
                                { pokeInfo.types[1]?.type.name && themes[pokeInfo.types[1]?.type.name] && (
                                    <PokeType theme={ themes[pokeInfo.types[1]?.type.name] }>
                                        { pokeInfo.types[1]?.type.name }
                                    </PokeType>
                                )}
                            </PokeNameContainer>
                            <PokeId>#{id}</PokeId>
                            <PokeImage src={sprites?.other['official-artwork']?.front_default} />
                            <InfoContainer>
                                <InfoContainerTopRow>
                                    <PageTitle page={selectedPage === 'about' ? 'selected' : ''} onClick={() => handlePageTitleClick('about')}>
                                        About
                                    </PageTitle>
                                    <PageTitle page={selectedPage === 'Base Stats' ? 'selected' : ''} onClick={() => handlePageTitleClick('Base Stats')}>
                                        Base Stats
                                    </PageTitle>
                                    <PageTitle page={selectedPage === 'Evolution' ? 'selected' : ''} onClick={() => handlePageTitleClick('Evolution')}>
                                        Evolution
                                    </PageTitle>
                                    <PageTitle page={selectedPage === 'Moves' ? 'selected' : ''} onClick={() => handlePageTitleClick('Moves')}>
                                        Moves
                                    </PageTitle>
                                </InfoContainerTopRow>
                                <InfoContainerBottomColumn page={selectedPage}>
                                    {selectedPage === 'about' && (
                                        <PokeAbout pokeInfo={pokeInfo} pokeSpecies={pokeSpecies} />
                                    )}
                                    {!isLoading && selectedPage === 'Base Stats' && (
                                        <PokeStats pokeInfo={pokeInfo} typeInfo={typeInfo} />
                                    )}
                                    {selectedPage === 'Evolution' && (
                                        <PokeEvolutions pokemonName={name} />
                                    )}
                                </InfoContainerBottomColumn>
                            </InfoContainer>
                        </PokeContainer>
                    </Modal>
                </ThemeProvider>
            )}
        </>
    );

}*/