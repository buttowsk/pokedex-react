import { PokeImage, IdText, NameText, Modal, MenuItem, MenuRow, TopColumn, BottomColumn, BackButton } from './styles.js'
import {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import {themes} from "../../globalStyles/styles.js";
import {PokeAbout} from "../PokeAbout/index.jsx";
import {PokeStats} from "../PokeStats/index.jsx";
import {PokeEvolutions} from "../PokeEvolutions/index.jsx";
import {useGenerateTypeInfo} from "../../hooks/useGenerateTypeInfo/index.js";

export const PokeModalTeste = ({ pokeInfo, isModalOpen, setIsModalOpen, pokeSpecies }) => {
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
                        <TopColumn>
                            <IdText>#{id}</IdText>
                            <NameText>{name}</NameText>
                            <PokeImage src={sprites.other['official-artwork'].front_default} />
                        </TopColumn>
                        <BottomColumn selectedPage={selectedPage}>
                            <MenuRow>
                                <MenuItem page={selectedPage === 'about' ? 'selected' : ''} onClick={() => handlePageTitleClick('about')}>About</MenuItem>
                                <MenuItem page={selectedPage === 'stats' ? 'selected' : ''} onClick={() => handlePageTitleClick('stats')}>Stats</MenuItem>
                                <MenuItem page={selectedPage === 'evolutions' ? 'selected' : ''} onClick={() => handlePageTitleClick('evolutions')}>Evolutions</MenuItem>
                            </MenuRow>
                            {selectedPage === 'about' && <PokeAbout pokeInfo={pokeInfo} pokeSpecies={pokeSpecies} />}
                            {selectedPage === 'stats' && <PokeStats pokeInfo={pokeInfo} typeInfo={typeInfo} />}
                            {selectedPage === 'evolutions' && <PokeEvolutions pokemonName={name} />}
                        </BottomColumn>
                    </Modal>
                </ThemeProvider>
            )}
        </>
    );

}